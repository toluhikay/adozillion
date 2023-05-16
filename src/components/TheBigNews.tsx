import React from "react";
import BigNEwsImg from "../assets/images/BigNewsImage.png";

const TheBigNews = () => {
  return (
    <div className="flex flex-wrap items-center justify-between my-12">
      <div className="md:w-[55%] w-full md:text-start text-center md:mb-0 mb-6">
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold lg:mb-[67px] md:mb-[40px] mb-6">The big News</h2>
        <p className="md:text-2xl sm:text-base text-sm lg:w-[80%] w-full tracking-wider font-light">
          Alpha Tribe Real Estate Co-ownership by Adozillion Homes and Realty is a reliable, exclusive and high-yielding Real Estate partnership opportunity. <br /> With a minimum input of Sixty Million Naira(60,000,000), the partnership rewards investors with up to <strong>25% – 60%</strong> returns on investment (ROI) over a period of <strong>12 – 36 months; 5 times more than FGN</strong>{" "}
          Treasury Bills.
        </p>
      </div>
      <div className="md:w-[40%] w-full md:mb-0 mb-12 flex items-center justify-center">
        <img src={BigNEwsImg} alt="" className="md:w-full w-full" />
      </div>
    </div>
  );
};

export default TheBigNews;
