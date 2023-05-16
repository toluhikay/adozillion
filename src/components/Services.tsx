import React from "react";
import ServiceImage1 from "../assets/images/Services1.png";
import ServiceImage2 from "../assets/images/Services2.png";
import ServiceImage3 from "../assets/images/Services3.png";
import ServiceImage4 from "../assets/images/Services4.png";
import FreshInMarket from "./FreshInMarket";
import LocateUs from "./LocateUs";

const Services = () => {
  const ServicesData = [
    { id: 1, img: ServiceImage1, label: "Building Construction", content: "We are proven to turn your dream into reality, building your vision through architectural designs." },
    { id: 2, img: ServiceImage2, label: "Real Estate Consultancy", content: "Our service is also poised with providing professional guidance in real estate investments and solving problems with innovative solutions." },
    { id: 3, img: ServiceImage3, label: "Facility Management", content: "Adozillion Homes maintain the functionality, safety and stability of your property. Ensuring that your facility runs effectively is paramount to us." },
    { id: 4, img: ServiceImage4, label: "Interior Decor", content: "Adozillion Homes Decorates your home for your comfort, your home and comfort is paramount to us." },
  ];
  return (
    <section className="w-full">
      <div className="w-full flex flex-col justify-center items-center lg:py-[93px] py-12 lg:px-[89px] px-[30px]">
        <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold lg:mb-[109px] md:mb-[70px] mb-12">Services We Render</h2>
        <div className="flex flex-wrap justify-between">
          {ServicesData.map((item, index) => {
            return (
              <div className="md:w-[48%] w-full justify-between items-center flex lg:mb-[149px] md:mb-[89px] mb-16" key={index}>
                <img src={item.img} className="sm:mr-[39px] mr-2 bg-[#B8934921] sm:p-5 p-2 md:w-auto w-[100px] h-auto rounded-[5px]" alt="" />
                <div>
                  <p className="font-semibold sm:text-base text-sm sm:mb-3 m-1">{item.label}</p>
                  <p className="sm:text-base text-xs">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <FreshInMarket />
        <LocateUs />
        {/* <ContactUs /> */}
      </div>
    </section>
  );
};

export default Services;
