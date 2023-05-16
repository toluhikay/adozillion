import React from "react";
import BgImage from "../assets/images/BgImage.png";

const BgiNewsMufasa = () => {
  return (
    <div className="flex flex-wrap justify-between items-center">
      <div className="bg-[url('/src/assets/images/MufasaBigNewsBg.png')] bg-center bg-contain bg-no-repeat md:w-[60%] sm:py-[66px] py-[50px] md:mb-0 mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold md:mb-[57px] md:text-start text-center">Home for the Elites</h2>
        <p className="mb-[30px] tracking-wide md:text-start text-center">
          The Mufasa Apartments consists of tastefully built apartments designed for luxurious comfort and produces huge investment returns. Our off plan offer allows <strong>58.3%</strong> and <strong>57.1%</strong> growth in value on the two and three bedroom apartments respectively in <strong>18 months</strong>.
        </p>
      </div>
      <div className="md:w-[33%] w-full">
        <img src={BgImage} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default BgiNewsMufasa;
