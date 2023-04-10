import Contact from "Contact";
import Cta from "Cta";
import Footer from "Footer";
import Testimonials from "Testimonials";
import AnotherFeature from "components/AnotherFeature";
import Features from "components/Features";
import Pricing from "components/Pricing";
import Header from "components/headers/Header";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import React from "react";

export const LandingPage = () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Features />
      <Pricing />
      <AnotherFeature />
      <Testimonials />
      <Cta />
      <Contact />
      <Footer />
    </AnimationRevealPage>
  );
};
