import React from "react";
import { SilverLevel, GoldLevel, PlatinumLevel } from "../constants/Partneship";
import PartImage1 from "../assets/images/PartnershipImage1.png";
import PartImage2 from "../assets/images/PartnershipImage2.png";
import PartImage3 from "../assets/images/PartnershipImage3.png";

const Partnership = () => {
  const PartnershipData = [
    { id: 1, label: "Silver Level Partnership", list: SilverLevel, img: PartImage1 },
    { id: 1, label: "Gold Level Partnership", list: GoldLevel, img: PartImage2 },
    { id: 1, label: "Platinum Level Partnership", list: PlatinumLevel, img: PartImage3 },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center lg:mb-[102px] md:mb-[75px] mb-[55px]">Partnership Options</h2>
      <div className="w-full flex flex-wrap lg:w-[80%] items-center justify-between">
        {PartnershipData.map((item, index) => {
          return (
            <div className="w-full flex items-center md:flex-row flex-col md:justify-between justify-center lg:mb-[103px] md:mb-[75px] mb-[55px]" key={index}>
              <div className={`${index === 1 ? "md:w-[30%]" : "md:w-[40%]"} md:mb-0 mb-12 w-full`}>
                <img className="w-full" src={item.img} alt="" />
              </div>
              <div className={`${index === 1 ? "md:w-[68%]" : "md:w-[58%]"} w-full`}>
                <p className="lg:text-2xl md:text-xl text-lg mb-5 font-bold">{item.label}</p>
                <ul className=" list-disc border-l-[7px] px-[31px] py-[54px] border-primary bg-primary/10">
                  {item.list.map((list, ind) => {
                    return (
                      <li className="md:text-xl sm:text-base text-sm md:mb-2 sm:mb-1 mb-2" key={ind}>
                        {ind === 1 ? (
                          <p>
                            <strong>{list.slice(0, 18)}</strong> <span>{list.slice(19)}</span>
                          </p>
                        ) : (
                          list
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partnership;
