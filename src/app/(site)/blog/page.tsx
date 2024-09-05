import { allPosts } from "contentlayer/generated";

import { BlogPosts } from "~/components/content/blog-posts";
import { siteConfig } from "~/config/site";
import { constructMetadata, getBlurDataURL } from "~/lib/utils";

export const metadata = constructMetadata({
  title: `Blog | ${siteConfig.name}`,
  description:
    "Official updates and announcements, as well as articles by members of the community.",
});

export default async function BlogPage() {
  const posts = await Promise.all(
    allPosts
      .filter((post) => post.published)
      .sort((a, b) => b.date.localeCompare(a.date))
      .map(async (post) => ({
        ...post,
        blurDataURL: await getBlurDataURL(post.image),
      })),
  );

  return <BlogPosts posts={posts} />;
}
