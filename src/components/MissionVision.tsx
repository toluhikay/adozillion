import React from "react";
import Vision from "../assets/images/Vision.png";
import Mission from "../assets/images/Mission.png";

const MissionVision = () => {
  const MissionVisionData = [
    { id: 1, img: Vision, label: "Vision", content: `To be the leading Real Estate Solutions Company of choice, with unmatched focus on Customer Satisfaction.` },
    { id: 2, img: Mission, label: "Mission", content: `Building functional world-class structures, you can always trust.` },
  ];

  return (
    <div>
      {MissionVisionData.map((item, index) => {
        return (
          <div data-aos="zoom-out-right" className={`flex justify-between items-center lg:my-32 md:my-24 my-10 md:flex-row flex-col-reverse ${index === 1 && "md:flex-row-reverse"}`} key={index}>
            <div className="md:w-[45%] w-full">
              <img src={item.img} alt="" />
            </div>
            <div data-aos="zoom-out-left" className={`md:w-[55%] w-full lg:min-h-[550px] md:min-h-[400px] px-3 py-6 flex flex-col items-center text-center justify-center  ${index !== 0 ? "md:bg-black text-white" : "md:bg-primary"}`}>
              <p className="lg:text-2xl md:text-xl text-lg  font-bold lg:mb-[50px] md:mb-[30px] mb-[20px]">{item.label}</p>
              <p className="lg:text-lg text-base font-light">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MissionVision;
