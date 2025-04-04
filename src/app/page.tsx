import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import AvailableTest from "./components/AvailableTest";
import BoostAbilities from "./components/BoostAbilities";
import WhatWillYouGet from "./components/WhatWillYouGet";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorks />
      <AvailableTest />
      <BoostAbilities />
      <WhatWillYouGet />
      <Footer />
    </>
  );
}
