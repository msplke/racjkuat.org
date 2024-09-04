import Link from "next/link";

import { BlurImage } from "~/components/blur-image";
import { BLOG_AUTHORS } from "~/config/blog";
import { getBlurDataURL } from "~/lib/utils";

export async function Authors({
  username,
  imageOnly,
}: {
  username: string;
  imageOnly?: boolean;
}) {
  const authors = BLOG_AUTHORS;
  const author = authors[username];

  // Check if the author exists
  if (!author) {
    // Handle the case where the author is not found. This could be rendering nothing, a placeholder, or logging an error.
    console.error(`Author not found: ${username}`);
    return null; // Example: return null to render nothing
  }

  return imageOnly ? (
    <BlurImage
      src={author.image}
      alt={author.name}
      width={32}
      height={32}
      priority
      placeholder="blur"
      blurDataURL={await getBlurDataURL(author.image)}
      className="size-8 rounded-full transition-all group-hover:brightness-90"
    />
  ) : (
    <Link
      href={author.link ?? "#"}
      className="group flex w-max items-center space-x-2.5"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BlurImage
        src={author.image}
        alt={author.name}
        width={40}
        height={40}
        priority
        placeholder="blur"
        blurDataURL={await getBlurDataURL(author.image)}
        className="size-8 rounded-full transition-all group-hover:brightness-90 md:size-10"
      />
      <div className="flex flex-col -space-y-0.5">
        <p className="font-semibold text-foreground max-md:text-sm">
          {author.name}
        </p>
        <p className="text-sm text-muted-foreground">@{username}</p>
      </div>
    </Link>
  );
}
