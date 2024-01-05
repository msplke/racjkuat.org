import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

import { Callout } from "~/components/callout";
import { MdxCard } from "~/components/mdx-card";
import { cn } from "~/lib/utils";

interface MdxProps {
  code: string;
}

interface ComponentProps {
  className: string;
}

const components = {
  h1: ({ className, ...props }: ComponentProps) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentProps) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 font-semibold tracking-tight first:mt-0 sm:text-3xl",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentProps) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 font-semibold tracking-tight sm:text-2xl",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: ComponentProps) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight sm:text-xl",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: ComponentProps) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight sm:text-lg",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: ComponentProps) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  a: ({ className, ...props }: ComponentProps) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentProps) => (
    <p className={cn("leading-7", className)} {...props} />
  ),
  ul: ({ className, ...props }: ComponentProps) => (
    <ul className={cn("my-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentProps) => (
    <ol className={cn("my-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: ComponentProps) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentProps) => (
    <blockquote
      className={cn(
        "prose-quoteless mt-6 border-l-2 pl-6 [&>*]:text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: ComponentProps) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: ComponentProps) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: ComponentProps) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: ComponentProps) => (
    <code className={cn("font-mono text-xs", className)} {...props} />
  ),
  Image,
  Callout,
  Card: MdxCard,
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  // @ts-expect-error Type {...} is not assignable to type MDXComponents
  return <Component components={components} />;
}
