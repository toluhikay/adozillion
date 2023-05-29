import React from "react";
import Evgc1 from "../assets/images/Evgc1.jpeg";
import Evgc2 from "../assets/images/Evgc2.jpeg";
import { FaHandPointRight } from "react-icons/fa";
import EvgcFeatures from "./EvgcFeatures";

const Finally = () => {
  const NeighbourDetails = ["Lekki International Airport", "Largest food Security Systems and Central Logistics park in sub-Saharan", "Lagos State Food and Logistics Hub", "The Proposed International Airport", "Proposed General Hospital, Epe.", "Iconic city", "De Allure", "Medorf Premium", "Ashborne Gardens", "Isimi Lagos", "Dukiya Africa"];

  return (
    <div className="text-start my-16 w-full flex flex-col justify-center items-center">
      <div className="flex flex-wrap lg:w-[80%] md:justify-between justify-center lg:mb-16 mb-12">
        <div className="md:w-[50%] sm:w-[80%] md:text-start text-center md:mb-0 mb-6">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-medium lg:mb-12 md:mb-6 mb-3">Finally! A Place You Can Live</h2>
          <p className="lg:leading-loose md:leading-normal lg:text-xl md:text-lg text-sm  font-extralight">
            Iconic City is strategically situated along the Epe-Ikorodu Expressway and is in close proximity to the new Lekki International Airport. Its contemporary facilities, resort-style amenities and tranquil setting make it an ideal environment for all types of businesses to thrive, multiply wealth & increase investment.
          </p>
        </div>
        <div className="lg:w-[38%] md:w-[45%] sm:w-[80%] flex justify-center items-center">
          <img src={Evgc1} alt="" />
        </div>
      </div>
      <div className="sm:w-[80%]">
        <EvgcFeatures />
      </div>
      <div className="flex flex-wrap md:justify-between justify-center lg:w-[80%] flex-row-reverse">
        <div className="lg:w-[38%] md:w-[45%] sm:w-[80%] md:mb-0 mb-12">
          <h3 className="lg:text-2xl md:text-xl text-lg font-medium lg:mb-12 md:text-start text-center mb-6 md:mb-8 mb:text ">Neighbourhood & Landmarks</h3>
          <ul>
            {NeighbourDetails.map((item, index) => {
              return (
                <li className="flex items-baseline font-extralight lg:mb-3 mb-1" key={index}>
                  <span className="mr-3 text-green-500">
                    <FaHandPointRight />
                  </span>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:w-[50%] sm:w-[80%]">
          <img src={Evgc2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Finally;
