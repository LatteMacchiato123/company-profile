import { Hero } from "@/components/Hero";
import { Procedure } from "@/components/Procedure";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div>
      <section className="sm:pt-16">
        <Hero />
      </section>
      <section>
        <Procedure />
      </section>
      <section id="services">
        <Services />
      </section>
    </div>
  );
}
