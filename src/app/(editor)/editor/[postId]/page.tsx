import { notFound, redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import { Editor } from "~/components/editor";
import { db, eq, schema } from "~/server/db";

export default async function EditorPage({
  params,
}: {
  params: { postId: string };
}) {
  const { userId } = auth();

  if (!userId) redirect("/login");

  const post = await db.query.posts.findFirst({
    where: eq(schema.posts.id, params.postId),
  });

  if (!post) notFound();

  return (
    <Editor
      post={{
        id: post.id,
        title: post.title,
        content: post.content,
        published: post.published,
      }}
    />
  );
}
