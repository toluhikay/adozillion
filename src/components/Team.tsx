import React from "react";
import AdoziMain from "../assets/images/AdoziMain.jpeg";
import Adozi from "../assets/images/Adozi.png";
import Isreal from "../assets/images/Isreal.png";
import Micheal from "../assets/images/Micheal.png";
import Olabisi from "../assets/images/Olabisi.png";
import Daniel from "../assets/images/Daniel.png";
import Mary from "../assets/images/Mary.png";

const Team = () => {
  const TeamData = [
    { id: 1, img: Adozi, name: "Simon Adozi", role: "Founder/CEO" },
    { id: 1, img: Isreal, name: "Israel Atoe", role: "DMD" },
    { id: 1, img: Micheal, name: "Micheal Anukwu", role: "PD" },
    { id: 1, img: Olabisi, name: "Olabisi Bayo", role: "CDC" },
    { id: 1, img: Daniel, name: "Daniel Odeh", role: "PM" },
    { id: 1, img: Mary, name: "Laura Ogala", role: "Admin & Operation" },
  ];

  return (
    <div className="my-20 text-center">
      <p className="text-center text-primary font-bold text-xl mb-6">Meet Our Team</p>
      <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold lg:mb-16 md:mb-12 mb-8">They make it all Happen</h2>
      <div className="bg-[url('/src/assets/images/TeamBg.png')] h-auto bg-no-repeat bg-cover bg-center lg:px-[89px] px-[30px] lg:py-28 md:py-20 py-28">
        <div className="flex flex-wrap justify-center">
          {TeamData.map((item, index) => {
            return (
              <div className="md:w-[24%] w-full flex items-center flex-col mb-16" key={index}>
                <img src={item.img} className="w-[80%] mb-3" alt="" />
                <p className="text-primary font-bold mb-2">{item.role}</p>
                <p className="text-[15px] font-bold">{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <div className="lg:w-[47%] md:w-[49%] md:mb-0 mb-12 flex justify-center items-center">
            <img src={AdoziMain} className="w-full lg:border-[24px] md:border-[18px] border-[10px] border-primary lg:rounded-[30px] rounded-[15px]" alt="" />
          </div>
          <div className="lg:w-[45%] md:w-[49%] text-start">
            <p className="text-primary font-bold text-lg mb-[2px]">Founder/CEO</p>
            <p className="lg:text-3xl md:text-2xl text-xl font-bold mb-8">Dr. Simon Adozi</p>
            <p className="lg:w-[65%] w-full md:text-xl">
              Dr. Simon holds a bachelor’s degree in Soil and Water Engineering and a second degree in Entrepreneurship Management from the Lagos Business School. He started his Real Estate career in 2016 as a realtor, helping over 60 Real Estate enthusiasts purchase plots of land and build their dream houses, from design conceptualization to delivery of top-notch finishing, while ensuring strict
              compliance with government procedures. Dr. Adozi has bagged several awards and recognitions including the prestigious 40-under-40 CEOs in Africa, African Youth Excellence Award, 100 Most Influential Youths in Africa, among others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
