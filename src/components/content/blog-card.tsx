import Link from "next/link";
import { type Post } from "contentlayer/generated";

import { BlurImage } from "~/components/blur-image";
import { cn, formatDate, placeholderBlurhash } from "~/lib/utils";
import { Authors } from "./authors";

export function BlogCard({
  data,
  priority,
  horizontale = false,
}: {
  data: Post & { blurDataURL: string };
  priority?: boolean;
  horizontale?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative",
        horizontale
          ? "grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6"
          : "flex flex-col space-y-2",
      )}
    >
      {data.image && (
        <div className="w-full overflow-hidden rounded-xl border">
          <BlurImage
            src={data.image}
            alt={data.title}
            width={800}
            height={400}
            priority={priority}
            placeholder="blur"
            sizes="(max-width: 768px) 750px, 600px"
            blurDataURL={data.blurDataURL ?? placeholderBlurhash}
            className={cn(
              "size-full object-cover object-center",
              horizontale ? "lg:h-72" : null,
            )}
          />
        </div>
      )}

      <div
        className={cn(
          "flex flex-1 flex-col",
          horizontale ? "justify-center" : "justify-between",
        )}
      >
        <div className="w-full">
          <h2 className="my-1.5 line-clamp-2 font-heading text-2xl">
            {data.title}
          </h2>
          {data.description && (
            <p className="line-clamp-2 text-muted-foreground">
              {data.description}
            </p>
          )}
        </div>

        <div className="mt-4 flex items-center space-x-3">
          {/* <Authors username={data.authors[0]!} imageOnly /> */}

          <div className="flex items-center -space-x-2">
            {data.authors.map((author) => (
              <Authors username={author} key={data._id + author} imageOnly />
            ))}
          </div>

          {data.date && (
            <p className="text-sm text-muted-foreground">
              {formatDate(data.date)}
            </p>
          )}
        </div>
      </div>

      <Link href={data.slug} className="absolute inset-0">
        <span className="sr-only">View Post</span>
      </Link>
    </article>
  );
}
