"use client";

import { MaxWidthWrapper } from "~/components/max-width-wrapper";
import { ModeToggle } from "~/components/mode-toggle";
import { marketingConfig } from "~/config/marketing";
import { useScroll } from "~/hooks/use-scroll";
import { MainNav } from "./main-nav";

export function NavBar({ scroll = false }: { scroll?: boolean }) {
  const scrolled = useScroll(50);

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
      }`}
    >
      <MaxWidthWrapper className="flex h-16 items-center justify-between py-4 xl:px-0">
        <MainNav items={marketingConfig.mainNav} />

        <ModeToggle />
      </MaxWidthWrapper>
    </header>
  );
}
