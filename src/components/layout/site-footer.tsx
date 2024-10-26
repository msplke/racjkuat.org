import Link from "next/link";

import { Icons } from "~/components/icons";
import { buttonVariants } from "~/components/ui/button";
import { footerItems } from "~/config/marketing";
import { cn } from "~/lib/utils";
import { MaxWidthWrapper } from "../max-width-wrapper";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <MaxWidthWrapper className="xl:px-0">
        <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-0 md:flex-row md:gap-2">
            <Icons.logo />
            <p className="text-center text-sm leading-loose md:text-left">
              Copyright © {new Date().getFullYear()} Rotaract Club of JKUAT.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 md:flex-row lg:gap-4">
            <div className="ml-auto text-sm text-primary">
              {footerItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="sr-only">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
