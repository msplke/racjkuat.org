import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

import { Icons } from "~/components/icons";
import { buttonVariants } from "~/components/ui/button";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

export function HeroLanding() {
  const { userId } = auth();

  return (
    <section className="space-y-6 py-12 sm:py-20">
      <div className="container flex max-w-5xl flex-col items-center gap-4 px-0 text-center">
        <Link
          href={siteConfig.links.instagram}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm", rounded: "full" }),
            "px-4",
          )}
          target="_blank"
        >
          Follow along on Instagram{" "}
          <Icons.instagram className="ml-2 size-3.5" />
        </Link>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[66px]">
          Welcome to the <br />
          <span className="text-[#d41367]">Rotaract Club of JKUAT</span>
        </h1>

        <p className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          We bring together members of our community to exchange ideas, develop
          professional and leadership skills, and have fun through service.
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            href={userId ? "/dashboard" : "/login"}
            className={cn(buttonVariants({ size: "lg" }), "px-4")}
          >
            {userId ? (
              <span className="flex items-center">
                Dashboard <Icons.chevronRight className="ml-1 size-4" />
              </span>
            ) : (
              <span>Login</span>
            )}
          </Link>
          <Link
            href="/about"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
