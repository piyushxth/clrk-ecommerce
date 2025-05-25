import Hero from "@/components/client/Hero";
import Trending from "@/components/client/Trending";
import BrandPartners from "@/components/client/BrandPartners";
import NewCollection from "@/components/client/NewCollection";

export default function Home() {
  return (
    <section>
      <Hero />
      <BrandPartners />
      <NewCollection />
      {/* <Trending /> */}
    </section>
  );
}

