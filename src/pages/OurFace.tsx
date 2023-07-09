import React from "react";
import HeroImg from "../assets/images/BrandAmbNewsPaper.jpeg";
import Brand1 from "../assets/images/BrandAmb1.jpeg";
import Brand2 from "../assets/images/BrandAmb2.jpeg";
import Brand3 from "../assets/images/BrandAmb3.jpeg";
import Footer from "../components/Footer";

const OurFace = () => {
  const Gallery = [Brand1, Brand2, Brand3];

  return (
    <div className=" bg-gradient-to-br from-red-500/60 flex flex-col justify-center items-center  via-black/50 to-yellow-200/60 w-full h-auto">
      <div className="flex flex-wrap lg:flex-row flex-col-reverse md:w-[80%] w-[90%] justify-between py-[100px] lg:px-[89px] md:px-[30px] px-[15px]  text-center min-h-screen items-center">
        <div className="w-full my-12">
          <p className=" bg-clip-text text-transparent font-bold lg:text-xl text-base bg-gradient-to-r to-red-400 via-black from-yellow-900">Meet Our Brand Ambassador</p>
          <h3 className="lg:text-5xl md:text-4xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r mt-2 from-yellow-800 to-red-700">Uche Montana</h3>
          <p className="text-yellow-900  text-xl leading-7 tracking-wider mt-6">
            Uche Montana is a Nigerian actress, model, and entrepreneur.
            <br />
            Uche's rise to the spotlight as an actress began in the Nigerian film industry in 2015.After which she also appeared in the Television drama series Hush which was aired on African Magic Showcase and African Magic Family on GOtv Africa from 2016 – 2017.
            <br />
            She has also featured in the lead and supporting roles in several Nollywood movies, amongst which are The Fake Life of Abuja Housewives alongside Fredrick Leonard, Nancy Isime, and other actors. She featured with Uzor Arukwe, Belinda Effah, and Alex Ekubo, amongst others. <br />
            She is currently signed as the official brand Ambassador of Adozillion homes
          </p>
        </div>
        <div className="w-full rounded-lg lg:mb-0 mb-12 flex justify-center items-center">
          <img className="lg:w-[70%] sm:w-[80%] w-[90%] rounded-xl" src={HeroImg} alt="" />
        </div>
      </div>
      <div className="md:w-[80%] w-[90%]">
        <h3 className="lg:text-5xl text-center mb-12 md:text-4xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r mt-2 from-yellow-800 to-red-700">Gallery</h3>
        <div className="flex justify-around pb-12 flex-wrap">
          {Gallery.map((item, index) => {
            return (
              <div className="md:w-[30%] w-full md:mb-0 mb-12" key={index}>
                <img src={item} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurFace;
