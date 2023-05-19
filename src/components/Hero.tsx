import React from "react";

const Hero = () => {
  return (
    <section className=" w-full text-center text-white h-screen bg-no-repeat bg-cover bg-[center] flex justify-center items-center">
      <div className="bg-[url('/src/assets/images/HeroImage.png')]  w-full flex flex-col justify-center items-center md:pt-0 pt-[100px] h-full">
        <p data-aos="fade-left" data-aos-duration="300" className="lg:text-6xl md:text-4xl text-3xl lg:w-[40%] w-full mb-7">
          Building for Your Comfort
        </p>
        <p data-aos="fade-right" data-aos-duration="300" className="lg:text-xl md:text-base font-extralight text-base tracking-widest lg:w-[60%] w-full mb-[45px]">
          Find variety of options that suits you and you family. Adozillion homes is here to make your life easy.
        </p>
        <button className=" bg-primary px-[43px] py-5 rounded-[2px] outline-none font-semibold mb-[75px]">Shedule a booking</button>
      </div>
    </section>
  );
};

export default Hero;
