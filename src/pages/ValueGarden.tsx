import React from "react";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import HeaderDiv from "../common/HeaderDiv";

const ValueGarden = () => {
  return (
    <div className="flex flex-col items-center">
      <div className={`bg-[url('/src/assets/images/EvgcBg.jpeg')] bg-blend-darken bg-black/70 lg:h-[70vh] w-full min-h-[50vh] flex items-center justify-center bg-no-repeat bg-cover bg-center`}>
        <HeaderDiv h1="Eco Value Garden City" p="A Paradise of Wealth and Tranquility" textCase="capitalize" />
      </div>
      <div className="lg:py-[100px] md:py-[70px] py-[50px] lg:px-[89px] md:px-[30px] px-[15px] flex flex-col items-center text-center">
        <h3 className="lg:w-[50%] md:w-[80%] lg:mb-12 md:mb-10 mb-6 lg:text-3xl md:text-2xl text-xl font-bold">
          <span className="text-green-600">ECO VALUE GARDEN CITY !!!</span> 🌴🌴🌴
        </h3>
        <p className="lg:w-[70%] lg:text-xl sm:text-base text-sm font-light">
          Eco Value Garden City (EVGC), Epe, is an eco-luxury Real Estate development, sitting on approximately 70 acres of land.
          <br /> <br />
          <p>It is a world-class city built with the upper, middle-class, and upwardly mobile people in mind. It is suitable for investment, quality, and a better living experience. </p>
        </p>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default ValueGarden;
