"use client";

import { useRef } from "react";
import Link from "next/link";

import { EditorOutput } from "~/components/editor-output";
import { Card } from "~/components/ui/card";
import { formatTimeToNow } from "~/lib/utils";
import { type Post } from "~/types/db";

export function IndividualPost({ post }: { post: Post }) {
  const postRef = useRef<HTMLParagraphElement>(null);

  return (
    <Card className="group relative flex flex-col space-y-2 rounded-lg p-4 hover:bg-slate-100 dark:hover:bg-slate-800">
      <h2 className="font-heading text-2xl font-bold">{post.title}</h2>

      <p className="text-sm text-muted-foreground">
        {formatTimeToNow(post.createdAt)}
      </p>

      <div
        className="relative max-h-40 w-full overflow-clip text-sm"
        ref={postRef}
      >
        <EditorOutput content={post.content} />

        {postRef.current?.clientHeight === 160 ? (
          // Blur bottom if content is too long
          <div className="absolute bottom-0 left-0 h-24 w-full rounded-lg bg-gradient-to-t from-secondary to-transparent"></div>
        ) : null}
      </div>

      <Link href={`/feed/${post.id}`} className="absolute inset-0">
        <span className="sr-only">View Post</span>
      </Link>
    </Card>
  );
}
