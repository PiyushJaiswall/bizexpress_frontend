import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { StatsCounter } from "@/components/sections/stats-counter";
import { Testimonials } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsCounter />
        <ServicesGrid />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
