import React from "react";

const Hero = () => {
  const METRICS = [
    { id: 1, number: "9", label: "Premium Product" },
    { id: 2, number: "2", label: "New properties" },
    { id: 3, number: "67", label: "Happy customers" },
  ];
  return (
    <section className=" w-full text-center text-white md:h-[calc(100vh-100px)] h-screen bg-no-repeat bg-cover bg-[center] flex justify-center items-center">
      <div className="bg-[url('/src/assets/images/HeroImage.png')] lg:mx-[89px] mx-[30px] w-full flex flex-col justify-center items-center md:pt-0 pt-[100px] h-full">
        <p className="lg:text-8xl md:text-6xl text-4xl lg:w-[40%] w-full mb-7">Building for Your Comfort</p>
        <p className="lg:text-2xl md:text-xl text-base tracking-widest font-[400px] lg:w-[60%] w-full mb-[45px]">Find variety of options that suits you and you family. Adozillion homes is here to make your life easy.</p>
        <button className=" bg-gradient-to-b from-[#93753A] to-[#DDB057] px-[43px] py-5 rounded-[5px] outline-none font-semibold mb-[75px]">Shedule a booking</button>
        <div className="flex flex-wrap items-center justify-between lg:w-[40%] w-full">
          {METRICS.map((METRIC, index) => {
            return (
              <div key={index} className="sm:w-[33%] w-full sm:mb-0 mb-6">
                <p className="font-bold text-2xl mb-1">
                  {METRIC.number}K<span className=" text-primary">+</span>
                </p>
                <p>{METRIC.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
