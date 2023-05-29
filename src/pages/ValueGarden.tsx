import React from "react";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import HeaderDiv from "../common/HeaderDiv";
import { BsSignpostSplit } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GiMountains } from "react-icons/gi";
import { MdPhotoSizeSelectSmall } from "react-icons/md";
import SubscribeEvgc from "../components/SubscribeEvgc";
import Finally from "../components/Finally";
import EvgcPrice from "../assets/images/EvgcPrice.jpeg";

const ValueGarden = () => {
  const Details = [
    { id: 1, icon: <CiLocationOn />, label: "Location", details: ["Value Garden City, Epe is strategically located with state-of-the-art facilities in the city of Epe."] },
    { id: 1, icon: <BsSignpostSplit />, label: "Title", details: ["Registered Survey and Free Hold"] },
    { id: 1, icon: <GiMountains />, label: "Topography", details: ["100% dry land "] },
    { id: 1, icon: <MdPhotoSizeSelectSmall />, label: "Plots Sizes and Pre-launch Prices", details: ["300 SQM- #1.2 M", "500 SQM- #1.95 M "] },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className={`bg-[url('/src/assets/images/EvgcBg.jpeg')] bg-blend-darken bg-black/70 lg:h-[100vh] w-full min-h-[50vh] flex items-center justify-center bg-no-repeat bg-cover bg-center`}>
        <HeaderDiv h1="Eco Value Garden City" textCase="capitalize" />
      </div>
      <div className="lg:py-[100px] md:py-[70px] py-[50px] lg:px-[89px] md:px-[30px] px-[15px] flex flex-col items-center text-center">
        <h3 className="lg:w-[60%] md:w-[80%] lg:mb-12 md:mb-10 mb-6 lg:text-3xl md:text-2xl text-xl font-medium">
          <span className="text-green-600">A Paradise of Wealth and Tranquility</span> <br /> 🌴🌴🌴
        </h3>
        <p className="lg:w-[70%] lg:text-xl sm:text-base text-sm font-extralight">
          Eco Value Garden City (EVGC), Epe, is an eco-luxury Real Estate development, sitting on approximately 70 acres of land.
          <br /> <br />
          <p>It is a world-class city built with the upper, middle-class, and upwardly mobile people in mind. It is suitable for investment, quality, and a better living experience. </p>
        </p>
        <div className="flex justify-between py-12 w-full flex-wrap items-start">
          {Details.map((item, index) => {
            return (
              <div className="flex flex-col text-center items-center lg:w-[24%] sm:w-[44%] w-full lg:mb-0 mb-3" key={index}>
                <p className="text-4xl text-green-900 mb-3">{item.icon}</p>

                <p className="text-green-600 font-medium lg:text-xl md:text-base mb-3">{item.label}</p>
                <ul className=" font-extralight">
                  {item.details.map((detail, index) => {
                    return <li key={index}>{detail}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <Finally />
        <div>
          <img src={EvgcPrice} alt="" />
        </div>
      </div>
      {/* <Subscribe /> */}
      <SubscribeEvgc />
      <Footer />
    </div>
  );
};

export default ValueGarden;
