import { HeroLanding } from "~/components/sections/hero-landing";
import { PreviewLanding } from "~/components/sections/preview-landing";
import { benefits } from "~/config/marketing";

export default function IndexPage() {
  return (
    <main className="container">
      <HeroLanding />
      <PreviewLanding />
      {/* <Partners /> */}

      <section
        id="benefits"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Benefits
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Here are some of the benefits of joining our club.
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
            To learn more about our club, please visit the about page or our
            social media pages linked below.
          </p>
        </div>
      </section>
    </main>
  );
}
