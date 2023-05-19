import React from "react";
import Fresh1 from "../assets/images/Fresh1.png";
import Fresh2 from "../assets/images/Fresh2.png";

const FreshInMarket = () => {
  const FreshMarketData = [
    {
      id: 1,
      img: Fresh1,
      name: "Monte Carlo",
      location: "Lagos Epe",
      tags: [
        { id: 1, size: "300sqm", price: "N15m" },
        { id: 2, size: "500sqm", price: "N25m" },
        { id: 3, size: "1000sqm", price: "N50m" },
      ],
    },
    {
      id: 2,
      img: Fresh2,
      name: "Mufasa X",
      location: "Lekki Lagos",
      tags: [
        { id: 1, size: "1 Bedroom", price: "" },
        { id: 2, size: "1 Bedroom Maisonette + Bq", price: "" },
        { id: 3, size: "2 Bedroom Maisonette + Bq", price: "" },
        { id: 4, size: "3 Bedroom Maisonette + Bq", price: "" },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="lg:text-3xl md:text-2xl text-xl text-primary font-bold lg:mb-14 md:mb-9 mb-8">Fresh in the market</p>
      <div className="flex flex-wrap justify-between w-full">
        {FreshMarketData.map((item, index) => {
          return (
            <div data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-duration="1000" className="md:w-[48%] flex justify-start h-full flex-col md:mb-0 mb-12 items-start w-full" key={index}>
              <img className="w-full" src={item.img} alt="" />
              <p className="font-semibold md:text-2xl text-lg py-1">{item.name}</p>
              <p className="pb-1">{item.location}</p>
              <div className="flex flex-wrap">
                {item.tags.map((tag, tagIndex) => {
                  return (
                    <p className="flex w-auto sm:p-4 p-1 sm:text-base text-sm h-auto bg-[#DDB05775] mr-4 mb-4 rounded-[2px]" key={tagIndex}>
                      <span>{tag.size}</span>
                      <span className="ml-1">{tag.price}</span>
                    </p>
                  );
                })}
              </div>
              <button className="bg-[#B89349] p-4 text-white rounded-[2px] font-bold">Explore Property</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FreshInMarket;
