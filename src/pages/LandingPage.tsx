import React from "react";
import Hero from "../components/Hero";
import DistinctiveQualities from "../components/DistinctiveQualities";
import Services from "../components/Services";
import Subscribe from "../components/Subscribe";
import LocateUs from "../components/LocateUs";
import ContactUs from "../components/ContactUs";

const LandingPage = () => {
  return (
    <main className="lg:px-[]">
      <Hero />
      <DistinctiveQualities />
      <Services />
      <ContactUs />
      <Subscribe />
    </main>
  );
};

export default LandingPage;
