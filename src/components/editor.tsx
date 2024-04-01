"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type EditorJS from "@editorjs/editorjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { z } from "zod";

import "~/styles/editor.css";

import { Icons } from "~/components/icons";
import { buttonVariants } from "~/components/ui/button";
import { toast } from "~/components/ui/use-toast";
import { editorTools } from "~/lib/editor-tools";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";
import { type Post } from "~/types/db";

interface EditorProps {
  post: Pick<Post, "id" | "title" | "content" | "published">;
}

export const updatePostSchema = z.object({
  title: z
    .string()
    .min(4, "Title must be at least 4 characters")
    .max(64, "Title cannot exceed 64 characters"),
  content: z.any().optional(), // TODO: Type this properly from editorjs block types?
});
export type PostFormValues = z.infer<typeof updatePostSchema>;

export function Editor({ post }: EditorProps) {
  const [isMounted, setIsMounted] = useState(false);

  const ref = useRef<EditorJS>();
  const router = useRouter();

  const { register, handleSubmit } = useForm<PostFormValues>({
    resolver: zodResolver(updatePostSchema),
  });

  const { mutateAsync: updatePost, isPending: updatingPost } =
    api.post.update.useMutation({
      onSuccess() {
        toast({
          title: "Post updated",
          description: "Your post has been updated successfully.",
        });
      },

      onError() {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      },
    });

  const onSubmit = async (values: PostFormValues) => {
    const blocks = await ref.current?.save();
    await updatePost({ postId: post.id, title: values.title, content: blocks });

    router.refresh();
  };

  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;

    const body = updatePostSchema.parse(post);

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          ref.current = editor;
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        data: body.content,
        inlineToolbar: true,
        placeholder: "Start typing here to create your post...",
        tools: editorTools,
      });
    }
  }, [post]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initializeEditor();
    };

    if (isMounted) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      init();

      return () => {
        ref.current?.destroy();
        ref.current = undefined;
      };
    }
  }, [isMounted, initializeEditor]);

  if (!isMounted) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full gap-10">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link
              href="/dashboard"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              <>
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                Back
              </>
            </Link>
            <p className="text-sm text-muted-foreground">
              {post.published ? "Published" : "Draft"}
            </p>
          </div>

          <button
            type="submit"
            disabled={updatingPost}
            className={cn(buttonVariants())}
          >
            {updatingPost && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            <span>Save</span>
          </button>
        </div>

        <div className="prose prose-stone mx-auto w-[800px] dark:prose-invert">
          <TextareaAutosize
            autoFocus
            id="title"
            defaultValue={post.title}
            placeholder="Post title"
            className="w-full resize-none appearance-none overflow-hidden bg-transparent text-4xl font-bold focus:outline-none"
            {...register("title")}
          />
          <div id="editor" className="min-h-[500px]" />
          <p className="text-sm text-gray-500">
            Use{" "}
            <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
              Tab
            </kbd>{" "}
            to open the command menu.
          </p>
        </div>
      </div>
    </form>
  );
}
