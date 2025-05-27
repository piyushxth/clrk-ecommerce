import Hero from "@/components/client/Hero";
import Trending from "@/components/client/Trending";
import BrandPartners from "@/components/client/BrandPartners";
import NewCollection from "@/components/client/NewCollection";
import BestSelling from "@/components/client/BestSelling";

export default function Home() {
  return (
    <section>
      <Hero />
      <BrandPartners />
      <NewCollection />
      <BestSelling />
      {/* <Trending /> */}
    </section>
  );
}
