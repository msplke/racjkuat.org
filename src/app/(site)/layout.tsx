import { auth } from "@clerk/nextjs/server";

import { NavBar } from "~/components/layout/navbar";
import { SiteFooter } from "~/components/layout/site-footer";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  const { userId } = auth();

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar scroll={true} userId={userId} />

      <main className="flex-1">{children}</main>

      <SiteFooter />
    </div>
  );
}
