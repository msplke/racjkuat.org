"use client";

import Link from "next/link";

import { Icons } from "~/components/icons";
import { MaxWidthWrapper } from "~/components/max-width-wrapper";
import { buttonVariants } from "~/components/ui/button";
import { marketingConfig } from "~/config/marketing";
import { useScroll } from "~/hooks/use-scroll";
import { cn } from "~/lib/utils";
import { MainNav } from "./main-nav";

interface NavBarProps {
  scroll?: boolean;
  userId: string | null;
}

export function NavBar({ scroll = false, userId }: NavBarProps) {
  const scrolled = useScroll(50);

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
      }`}
    >
      <MaxWidthWrapper className="flex h-16 items-center justify-between py-4 xl:px-0">
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
      </MaxWidthWrapper>
    </header>
  );
}
