import React, { useState } from "react";
import BrandImage from "../assets/images/BrandImage.png";
import { BsCaretDownSquareFill } from "react-icons/bs";

const BrandPhilosophy = () => {
  const [dropDownOpen, setDropDownOpen] = useState(0);

  const BrandPhilosophyData = [
    { id: 1, label: "CUSTOMER CENTRICITY", content: "Our clients are the driving force of our existence; keeping them satisfied is the reason we are in business." },
    { id: 2, label: "INTEGRITY", content: "We walk our talk and keep our words." },
    { id: 3, label: "EXCELLENCE", content: "We are extremists and that's why we render the best services." },
    { id: 4, label: "AUDACIOUSLY AWARE", content: "We are research-driven and always keeping up with global trends that help our clients make informed decisions." },
  ];

  return (
    <div className="flex justify-between flex-wrap md:flex-row  md:text-start text-center flex-col-reverse items-center">
      <div data-aos="zoom-out-right" className="md:w-[46%]">
        <img src={BrandImage} className="w-full" alt="" />
      </div>
      <div data-aos="fade-left" className="md:w-[45%]">
        <p className="md:text-2xl text-base text-white mb-3">Our Value</p>
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3">Our Brand Philosophy</h2>
        <p className="lg:w-[70%] mb-10">Adozillion Homes & Realty aims to be on time & on budget, providing unbridledquality, affordability & sheer luxury. Our values are:</p>
        <div>
          {BrandPhilosophyData.map((item, index) => {
            return (
              <div className="border border-[#08244d36] py-[26px] px-[35px] text-start md:mb-[49px] mb-[20px]" key={index}>
                <div className={`flex justify-between items-center ${dropDownOpen === item.id && "mb-6"}`}>
                  <div className="flex items-center">
                    <div className="w-[39px] sm:mr-12 mr-2 h-[26px] bg-primary border-white border"></div>
                    <p className="sm:text-base text-sm">{item.label}</p>
                  </div>
                  <BsCaretDownSquareFill
                    className="text-white w-[34px] h-[26px] cursor-pointer"
                    onClick={() => {
                      dropDownOpen !== item.id ? setDropDownOpen(item.id) : setDropDownOpen(0);
                    }}
                  />
                </div>
                <div className={`${dropDownOpen === item.id ? "flex" : "hidden"} overflow-hidden`}>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandPhilosophy;
