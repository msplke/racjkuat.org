"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Icons } from "~/components/icons";
import { buttonVariants, type ButtonProps } from "~/components/ui/button";
import { toast } from "~/components/ui/use-toast";
import { cn } from "~/lib/utils";

type PostCreateButtonProps = ButtonProps;

export function PostCreateButton({
  className,
  variant,
  ...props
}: PostCreateButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function onClick() {
    setIsLoading(true);

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Untitled Post",
      }),
    });

    setIsLoading(false);

    if (!response?.ok) {
      if (response.status === 402) {
        return toast({
          title: "Limit of 3 posts reached.",
          description: "Please upgrade to the PRO plan.",
          variant: "destructive",
        });
      }

      return toast({
        title: "Something went wrong.",
        description: "Your post was not created. Please try again.",
        variant: "destructive",
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const post = await response.json();

    // This forces a cache invalidation.
    router.refresh();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    router.push(`/editor/${post.id}`);
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        buttonVariants({ variant }),
        {
          "cursor-not-allowed opacity-60": isLoading,
        },
        className,
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.add className="mr-2 h-4 w-4" />
      )}
      New post
    </button>
  );
}
