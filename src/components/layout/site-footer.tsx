import Link from "next/link";

import { Icons } from "~/components/icons";
import { ModeToggle } from "~/components/mode-toggle";
import { buttonVariants } from "~/components/ui/button";
import { footerItems } from "~/config/marketing";
import { cn } from "~/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            © {new Date().getFullYear()} Rotaract Club of JKUAT. All rights
            reserved.
          </p>
        </div>

        <div className="lg flex flex-col items-center gap-2 md:flex-row lg:gap-4">
          <div className="ml-auto text-sm text-primary">
            {footerItems.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                target="_blank"
                referrerPolicy="no-referrer"
                className={buttonVariants({ variant: "ghost" })}
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.title}</span>
              </Link>
            ))}
          </div>

          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
