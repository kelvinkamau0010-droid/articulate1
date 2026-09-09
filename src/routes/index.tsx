import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Features } from "@/components/landing/features";
import { Coaches } from "@/components/landing/coaches";
import { Scenarios } from "@/components/landing/scenarios";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Coaches />
        <Scenarios />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
