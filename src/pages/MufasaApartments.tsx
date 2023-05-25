import React from "react";
import Subscribe from "../components/Subscribe";
import HeaderDiv from "../common/HeaderDiv";
import BgiNewsMufasa from "../components/BgiNewsMufasa";
import WhyBestMufasa from "../components/WhyBestMufasa";
import Footer from "../components/Footer";

const MufasaApartments = () => {
  return (
    <div className="">
      <div className="bg-[url('/src/assets/images/MufasaHeroBg.png')] bg-center bg-cover bg-no-repeat flex items-center justify-center lg:h-[550px] h-screen lg:px-[89px] px-[30px] md:lg-[190px] md:mb-[100px] mb-[70px]">
        <HeaderDiv h1="Home for the Elites" textCase="uppercase" />
      </div>
      <div className="lg:px-[89px] sm:px-[30px] px-[15px] lg:py-[100px] md:py-[75px] py-[30px]">
        <BgiNewsMufasa />
        <WhyBestMufasa />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default MufasaApartments;
