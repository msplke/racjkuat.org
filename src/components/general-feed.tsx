import { PostFeed } from "~/components/post/post-feed";
import { INFINITE_SCROLL_PAGINATION_RESULTS } from "~/config";
import { db } from "~/server/db";

export async function GeneralFeed() {
  const posts = await db.query.posts.findMany({
    orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    limit: INFINITE_SCROLL_PAGINATION_RESULTS,
  });

  return <PostFeed initialPosts={posts} />;
}
