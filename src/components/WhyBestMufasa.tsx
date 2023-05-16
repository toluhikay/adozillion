import React from "react";
import VidPlaceHolder from "../assets/images/VideoPlaceholder.png";

const WhyBestMufasa = () => {
  return (
    <div>
      <div className="flex justify-center items-center my-[67px]">
        <h2 className="sm:text-2xl text-xl md:text-3xl lg:text-5xl font-bold lg:mr-[71px] md:mr-[50px] mr-1">Why its the Best Investment</h2>
        <h2 className="bg-primary rounded-full lg:w-[144px] lg:h-[144px] md:w-[100px] md:h-[100px] sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]  flex justify-center items-center lg:text-[100px] md:text-[70px] sm:text-[30px] text-lg font-bold rotate-[10deg]">?</h2>
      </div>
      <div>
        <div>
          <img src={VidPlaceHolder} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default WhyBestMufasa;
