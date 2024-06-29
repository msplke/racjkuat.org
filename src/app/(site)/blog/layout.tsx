import { BlogHeaderLayout } from "~/components/content/blog-header-layout";
import { MaxWidthWrapper } from "~/components/max-width-wrapper";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogHeaderLayout />
      <MaxWidthWrapper className="pb-16">{children}</MaxWidthWrapper>
    </>
  );
}
