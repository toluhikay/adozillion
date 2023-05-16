import React from "react";
import PagesHero from "../common/PagesHero";
import HeaderDiv from "../common/HeaderDiv";
import WhoAreWe from "../components/WhoAreWe";
import MissionVision from "../components/MissionVision";
import BrandPhilosophy from "../components/BrandPhilosophy";
import Team from "../components/Team";
import Subscribe from "../components/Subscribe";

const AboutUs = () => {
  return (
    <div>
      <PagesHero bgImage="url('/src/assets/images/CustomerSupportImage.jpeg')" header={<HeaderDiv h1="about us" textCase="capitalize" p="why us" />} />
      <div className="lg:px-[89px] px-[30px]">
        <WhoAreWe />
        <MissionVision />
        <BrandPhilosophy />
      </div>
      <Team />
      <Subscribe />
    </div>
  );
};

export default AboutUs;
