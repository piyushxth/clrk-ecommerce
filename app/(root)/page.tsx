import Hero from "@/components/client/Hero";
import Trending from "@/components/client/Trending";
import BrandPartners from "@/components/client/BrandPartners";
import NewCollection from "@/components/client/NewCollection";
import BestSelling from "@/components/client/BestSelling";
import WhyUs from "@/components/client/WhyUs";
import Footer from "@/components/client/Footer";

export default function Home() {
  return (
    <section>
      <Hero />
      <BrandPartners />
      <NewCollection />
      <BestSelling />
      <WhyUs />
      <Footer />
      {/* <Trending /> */}
    </section>
  );
}
