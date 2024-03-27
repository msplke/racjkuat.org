"use client";

import { useRouter } from "next/navigation";

import { Icons } from "~/components/icons";
import {
  Button,
  buttonVariants,
  type ButtonProps,
} from "~/components/ui/button";
import { toast } from "~/components/ui/use-toast";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

type PostCreateButtonProps = ButtonProps;

export function PostCreateButton({
  className,
  variant,
  ...props
}: PostCreateButtonProps) {
  const router = useRouter();

  const { mutateAsync: createPost, isPending: creatingPost } =
    api.post.create.useMutation({
      onSuccess() {
        toast({
          title: "Post created",
          description: "Your post has been created successfully.",
        });
      },

      onError() {
        toast({
          title: "Something went wrong",
          description: "Your post was not created. Please try again.",
          variant: "destructive",
        });
      },
    });

  const onClick = async () => {
    const post = await createPost({ title: "Untitled Post" });

    // This forces a cache invalidation.
    router.refresh();

    if (!post) return;
    router.push(`/editor/${post.id}`);
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        buttonVariants({ variant }),
        { "cursor-not-allowed opacity-60": creatingPost },
        className,
      )}
      disabled={creatingPost}
      {...props}
    >
      {creatingPost ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.add className="mr-2 h-4 w-4" />
      )}
      New post
    </Button>
  );
}
