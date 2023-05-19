import React from "react";
import Image1 from "../assets/images/Distinctive1.png";
import Image2 from "../assets/images/Distinctive2.png";
import Image3 from "../assets/images/Distinctive3.png";

const DistinctiveQualities = () => {
  const QualitiesData = [
    { id: 1, img: Image1, label: "Finest Architecture", content: "A combination of classic and futuristic forms, shapes, textures, rhythms and balance in designs and construction techniques giving the best interior and exterior facade unmatched.", animation: "zoom-out-down" },
    { id: 2, img: Image2, label: "Smart Homes", content: "Absolute control and command of your home at the tip of your fingers without the need of an extra hand is one of the new innovations we have provided in luxury homes.", animation: "zoom-out-up" },
    { id: 3, img: Image3, label: "Views", content: "Homes strategically positioned in a tranquil environment, having to view the adorable skyscape, feel the cool ocean breeze that creates a pleasant atmosphere for comfortable outdoor relaxation.", animation: "zoom-out-down" },
  ];

  return (
    <section className="w-full flex flex-col justify-between items-center lg:pt-[200px] md:pt-[120px] pt-[80px]">
      <div className="text-center w-[90%] flex flex-col items-center">
        <p className="lg:text-3xl md:text-2xl text-xl text-primary font-bold">Distinctive Qualities</p>
        <p className="lg:w-1/2 w-full md:mt-7 mt-3 lg:text-xl md:text-base text-sm font-extralight tracking-wider">The ambience of royalty, touch of class and comfort. Adozillion Homes and Realtyshowed up with excellent delivery of opulence to deserving elite personalities, afirst of its kind in the history of real estate.</p>
      </div>
      <div className="flex flex-col justify-center w-full bg-black relative lg:h-[515px] md:h-[400px] h-auto text-white  md:py-0 py-12 mt-12 lg:px-[89px] px-[30px]">
        <div className="flex flex-wrap justify-between items-center relative ">
          {QualitiesData.map((item, index) => {
            return (
              <div key={index} className="md:w-[32%] transition-all md:mb-0 mb-6 md:border-0 hover:scale-105 border-white border rounded-[px] overflow-hidden w-full">
                {/* <img src={item.img} alt="" className="w-full" /> */}
                <div data-aos={item.animation} data-aos-duration="800" className={`${index === 1 ? "bg-white text-primary" : "bg-primary text-white"}  flex flex-col justify-center items-start px-[15px] rounded-b-[5px] min-h-[250px]`}>
                  <p className="font-semibold lg:text-2xl text-lg lg:mb-4 mb-1">{item.label}</p>
                  <p className="font-light">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DistinctiveQualities;
