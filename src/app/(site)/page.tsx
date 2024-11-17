import { Benefits } from "~/components/sections/benefits";
import { HeroLanding } from "~/components/sections/hero-landing";
import { PreviewLanding } from "~/components/sections/preview-landing";
import { Testimonials } from "~/components/sections/testimonials";

export default function IndexPage() {
  return (
    <main className="container">
      <HeroLanding />
      <PreviewLanding />
      {/* <Partners /> */}
      <Benefits />
      <Testimonials />
    </main>
  );
}
