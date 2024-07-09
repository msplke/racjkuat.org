import { Benefits } from "~/components/sections/benefits";
import { HeroLanding } from "~/components/sections/hero-landing";
import { PreviewLanding } from "~/components/sections/preview-landing";

export default function IndexPage() {
  return (
    <main className="container">
      <HeroLanding />
      <PreviewLanding />
      {/* <Partners /> */}
      <Benefits />
      {/* <Testimonials /> */}
    </main>
  );
}
