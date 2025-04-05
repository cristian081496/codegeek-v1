import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import AvailableTest from "./components/AvailableTest";
import BoostAbilities from "./components/BoostAbilities";
import WhatWillYouGet from "./components/WhatWillYouGet";
import Reviews from "./components/Reviews";
import Community from "./components/Community";
import Plans from "./components/Plans";
import Faq from "./components/Faq";
import Results from "./components/Results";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorks />
      <AvailableTest />
      <BoostAbilities />
      <WhatWillYouGet />
      <Reviews />
      <Community />
      <Plans />
      <Faq />
      <Results />
      <Footer />
    </>
  );
}
