import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Story } from "@/components/sections/story";
import { MenuSection } from "@/components/sections/menu-section";
import { Reviews } from "@/components/sections/reviews";
import { Visit } from "@/components/sections/visit";
import { Faq } from "@/components/sections/faq";
import { CtaFinal } from "@/components/sections/cta-final";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Story />
        <MenuSection />
        <Reviews />
        <Visit />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}