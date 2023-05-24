import React from "react";
import PagesHero from "../common/PagesHero";
import HeaderDiv from "../common/HeaderDiv";
import WhoAreWe from "../components/WhoAreWe";
import MissionVision from "../components/MissionVision";
import BrandPhilosophy from "../components/BrandPhilosophy";
import Team from "../components/Team";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center">
      {/* <PagesHero bgImage="url('/src/assets/images/CustomerSupportImage.jpeg')" header={<HeaderDiv h1="about us" textCase="capitalize" p="why us" />} /> */}
      <div className={`bg-[url('/src/assets/images/AboutUsBg.png')] w-full lg:min-h-[100vh] md:h-[60vh] h-[50vh] flex items-center justify-center bg-no-repeat bg-cover bg-center`}>
        {" "}
        <HeaderDiv h1="about us" textCase="capitalize" p="why us" />
      </div>
      <div className="lg:px-[89px] bg-gradient-to-tr flex flex-col items-center from-yellow-100 via-primary/70 to-yellow-200 w-full px-[30px]">
        <div className="md:w-[80%] w-full">
          <WhoAreWe />
          <MissionVision />
          <BrandPhilosophy />
        </div>
      </div>
      <Team />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default AboutUs;
