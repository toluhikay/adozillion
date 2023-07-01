import React from "react";
import Fresh1 from "../assets/images/MonteCarlo.jpg";
import Fresh2 from "../assets/images/Fresh2.png";
import Evgc from "../assets/images/evgc.jpeg";
import AlphaPicture from "../assets/images/investment.jpeg";
import { Link, useNavigate } from "react-router-dom";

const LandingPage1 = () => {
  const ProjectData = [
    { id: 2, img: Fresh2, name: "Mufasa Apartments", link: "https://mufasaapartments.com/" },
    { id: 1, img: Fresh1, name: "Monte Carlo Lagos", link: "https://www.montecarlolagos.com/" },
    { id: 4, img: Evgc, name: "Eco Value Garden City", link: "/eco_value_garden_city" },
    // { id: 4, img: AlphaPicture, name: "Alpha Tribe Co-operative club", link: "/alpha_tribe" },
  ];
  const DATE = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <div data-aos-offset="0" className="w-full relative bg-gradient-to-tr bg-gray-100 bg-center bg-cover bg-no-repeat min-h-screen flex flex-col justify-center items-center ">
      <div className="flex flex-col text-secondary justify-center text-center lg:px-[89px] px-[30px] lg:pt-[150px] pt-[100px] items-center">
        <h1 className="font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl mb-3">Luxury at its Peak</h1>
        <p className="font-light text-center mb-6">Find variety of options that suits you and you family. Adozillion homes is here to make your life easy.</p>
        <button className="bg-secondary text-white px-6 py-2 text-xl font-light rounded-[2px]" onClick={() => navigate("/contact")}>
          Get Started
        </button>
      </div>
      <div data-aos="fade-left" data-aos-delay="500" className="flex flex-wrap md:justify-between mb-[100px] lg:px-[89px] mt-[30px] px-[30px]">
        {ProjectData.map((item, index) => {
          return (
            <div className="md:w-[33%] md:mx-0 sm:mx-[20%] w-full md:mb-0 mb-3 text-secondary" key={item.id}>
              <img src={item.img} className="w-full h-auto lg:h-[250px] xl:h-[300px]" alt="" />
              <Link to={item.link} target={index === 0 || index === 1 ? "_blank" : "_parent"}>
                <p className="font-bold py-3 underline cursor-pointer">{item.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="py-4 border-t border-secondary text-xs w-full absolute bottom-0 left-0 text-center">
        <p>Copyrights © {DATE} Adozillion Homes and Realty Ltd- All Rights Reserved</p>
      </div>
    </div>
  );
};

export default LandingPage1;
