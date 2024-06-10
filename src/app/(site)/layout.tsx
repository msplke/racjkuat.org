import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

import { Icons } from "~/components/icons";
import { MainNav } from "~/components/layout/main-nav";
import { SiteFooter } from "~/components/layout/site-footer";
import { buttonVariants } from "~/components/ui/button";
import { marketingConfig } from "~/config/marketing";
import { cn } from "~/lib/utils";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  const { userId } = auth();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />

          <nav>
            <Link
              href={userId ? "/dashboard" : "/login"}
              className={cn(buttonVariants({ variant: "secondary" }), "px-4")}
            >
              {userId ? (
                <span className="flex items-center">
                  Dashboard
                  <Icons.chevronRight className="ml-1 h-4 w-4" />
                </span>
              ) : (
                <span>Login</span>
              )}
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <SiteFooter />
    </div>
  );
}
