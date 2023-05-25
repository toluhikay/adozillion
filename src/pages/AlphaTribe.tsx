import React from "react";
import Subscribe from "../components/Subscribe";
import HeaderDiv from "../common/HeaderDiv";
import TheBigNews from "../components/TheBigNews";
import WhyPartner from "../components/WhyPartner";
import Partnership from "../components/Partnership";
import Footer from "../components/Footer";

const AlphaTribe = () => {
  return (
    <div>
      <div className="bg-[url('/src/assets/images/AlphaTribeBg.png')] bg-center bg-cover bg-no-repeat flex items-center justify-center lg:h-[650px] h-screen lg:px-[89px] px-[30px] md:lg-[190px] md:mb-[100px] mb-[70px]">
        <div className="text-center md:w-[60%] w-full ">
          <HeaderDiv h1="ALPHA TRIBE REAL ESTATE CO_OWNERSHIP" textCase="uppercase" />
        </div>
      </div>
      <div className="flex flex-col justify-between lg:px-[89px] sm:px-[30px] px-[15px]">
        <TheBigNews />
      </div>
      <WhyPartner />
      <div className="flex flex-col justify-between lg:px-[89px] sm:px-[30px] px-[15px]">
        <Partnership />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default AlphaTribe;
