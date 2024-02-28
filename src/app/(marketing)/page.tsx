import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "~/components/ui/button";
import { benefits } from "~/config/marketing";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

export default function IndexPage() {
  return (
    <main className="container">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-28">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.instagram}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Instagram
          </Link>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Welcome to the <br />
            Rotaract Club of JKUAT.
            <br />
            What’s involved?
            <br />
            Rotaract members decide how to organize and run their clubs, manage
            their own funds, and plan and carry out activities and service
            projects. Rotary club sponsors offer guidance and support and work
            with your club as partners in service.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Create Hope in the World!Join the global movement of young leaders
            who are developing innovative solutions to the world’s most pressing
            challenges. Rotaract clubs bring together people ages 18 and older
            to exchange ideas with leaders in the community, develop leadership
            and professional skills, and have fun through service. In
            communities worldwide, Rotary and Rotaract members work side by side
            to take action through service. From big cities to rural villages,
            Rotaract is changing communities like yours.
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Login
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

      <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container flex items-center px-4 text-center md:px-6 lg:text-start">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/placeholder.svg"
              width="550"
            />

            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">
                  Welcome to the Rotaract Club of JKUAT.
                </h2>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:leading-8 md:text-xl">
                  Create Hope in the World!
                </p>
              </div>

              <div className="space-x-4">
                <Link
                  href="/login"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Login
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                  )}
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="benefits"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Benefits
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This project is an experiment to see how a modern app, with features
            like auth, subscriptions, API routes, and static pages would work in
            Next.js 13 app dir.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border bg-background p-1"
            >
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Taxonomy also includes a blog and a full-featured documentation site
            built using Contentlayer and MDX.
          </p>
        </div>
      </section>
    </main>
  );
}
