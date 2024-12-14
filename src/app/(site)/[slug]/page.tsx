import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";

import { Mdx } from "~/components/content/mdx-components";
import { siteConfig } from "~/config/site";
import { absoluteUrl, constructMetadata } from "~/lib/utils";

export function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.slugAsParams,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await props.params;
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) return;

  const { title, description } = page;

  return constructMetadata({
    title: `${title} | ${siteConfig.name}`,
    description: description,
    type: "article",
    url: absoluteUrl(page.slug),
  });
}

export default async function PagePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) notFound();

  return (
    <article className="container max-w-3xl py-6 lg:py-12">
      <div className="space-y-4">
        <h1 className="inline-block font-heading text-4xl lg:text-5xl">
          {page.title}
        </h1>
        {page.description && (
          <p className="text-base text-muted-foreground md:text-lg">
            {page.description}
          </p>
        )}
      </div>
      <hr className="my-4" />
      <Mdx code={page.body.code} />
    </article>
  );
}
