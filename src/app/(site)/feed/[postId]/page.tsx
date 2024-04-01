import Link from "next/link";
import { notFound } from "next/navigation";

import { Icons } from "~/components";
import { EditorOutput } from "~/components/editor-output";
import { buttonVariants } from "~/components/ui/button";
import { cn, formatTimeToNow } from "~/lib/utils";
import { db, eq, schema } from "~/server/db";

interface PostDetailPageProps {
  params: {
    postId: string;
  };
}

export default async function PostDetailPage({
  params: { postId },
}: PostDetailPageProps) {
  const post = await db.query.posts.findFirst({
    where: eq(schema.posts.id, postId),
  });

  if (!post) return notFound();

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/feed"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex",
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link>

      <div>
        {!post.updatedAt ? (
          <time
            dateTime={String(post.createdAt)}
            className="block text-sm text-muted-foreground"
          >
            Published {formatTimeToNow(post.createdAt)}
          </time>
        ) : (
          <time
            dateTime={String(post.updatedAt)}
            className="block text-sm text-muted-foreground"
          >
            Last updated {formatTimeToNow(post.updatedAt)}
          </time>
        )}

        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>

        {/* {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <Link
                  key={author._id}
                  href={`https://twitter.com/${author.twitter}`}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                    <p className="text-[12px] text-muted-foreground">
                      @{author.twitter}
                    </p>
                  </div>
                </Link>
              ) : null,
            )}
          </div>
        ) : null} */}
      </div>

      <EditorOutput content={post.content} />

      <hr className="mt-12" />

      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/feed" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  );
}
