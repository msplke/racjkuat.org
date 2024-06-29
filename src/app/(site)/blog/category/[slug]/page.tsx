import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { BlogCard } from "~/components/content/blog-card";
import { BLOG_CATEGORIES } from "~/config/blog";
import { siteConfig } from "~/config/site";
import { constructMetadata } from "~/lib/utils";

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const category = BLOG_CATEGORIES.find(
    (category) => category.slug === params.slug,
  );

  if (!category) return;

  const { title, description } = category;

  return constructMetadata({
    title: `${title} Posts | ${siteConfig.name}`,
    description,
  });
}

export default function BlogCategory({ params }: { params: { slug: string } }) {
  const data = BLOG_CATEGORIES.find(
    (category) => category.slug === params.slug,
  );

  if (!data) notFound();

  const articles = allPosts
    .filter((post) => post.categories.includes(data.slug))
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div>
      {articles.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, idx) => (
            <BlogCard key={article._id} data={article} priority={idx <= 2} />
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  );
}
