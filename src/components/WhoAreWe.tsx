import React from "react";
import Who1 from "../assets/images/Who1.png";
import Who2 from "../assets/images/Who2.png";
import Who3 from "../assets/images/Who3.png";
import Who4 from "../assets/images/Who4.png";

const WhoAreWe = () => {
  const ImgArr = [Who1, Who2, Who3, Who4];
  return (
    <div data-aos="fade-right" className="flex flex-wrap items-center md:justify-between pt-12 md:pt-16 lg:pt-28 justify-center md:text-start text-center w-full">
      <div className="md:w-[50%] w-full md:mb-0 mb-12">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold lg:mb-8 md:mb-6 mb-3">Who are we?</h2>
        <p className="lg:text-xl md:base font-light">
          Adozillion Homes and Realty is a Real Estate Development Company with proven capabilities in the provision of a wide variety of profitable Residential & Commercial properties out of sheer innovation and enmeshed in modern standards for the elite and continuously offering them property ownership and investment opportunities. We bring to bear our experience which cuts across Property
          Development, Construction Management, Real Estate Investments & Facility Management. With our expertise, you are guaranteed luxury and affordability with high returns on your real estate investment. From conceptualisation to completion, we create properties that bring life to your dream home and help you write your story.
        </p>
      </div>
      <div data-aos="fade-left" className="md:w-[40%] sm:w-[70%] w-full flex flex-wrap">
        {ImgArr.map((item, index) => {
          return (
            <div className="w-[49%]" key={index}>
              <img src={item} alt="" className="w-full p-2" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhoAreWe;
