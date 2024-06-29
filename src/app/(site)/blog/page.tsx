import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { BlogPosts } from "~/components/content/blog-posts";
import { siteConfig } from "~/config/site";
import { constructMetadata } from "~/lib/utils";

export const metadata = constructMetadata({
  title: `Blog | ${siteConfig.name}`,
  description:
    "Official updates and announcements, as well as articles by members of the community.",
});

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return <BlogPosts posts={posts} />;
}
