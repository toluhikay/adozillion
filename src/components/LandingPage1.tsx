import React from "react";
import Fresh1 from "../assets/images/Fresh1.png";
import Fresh2 from "../assets/images/Fresh2.png";

const LandingPage1 = () => {
  const ProjectData = [
    { id: 1, img: Fresh1, name: "Monte Carlo Lagos" },
    { id: 2, img: Fresh2, name: "Mufasa Apartments" },
    { id: 3, img: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", name: "Alpha Tribe Real Estate" },
    { id: 4, img: "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", name: "Value Garden City" },
  ];
  const DATE = new Date().getFullYear();

  return (
    <div className="w-full relative bg-gradient-to-tr from-yellow-100 via-yellow-200 to-white bg-center bg-cover bg-no-repeat min-h-screen flex flex-col justify-center items-center ">
      <div className="flex flex-col text-secondary justify-center text-center lg:px-[89px] px-[30px] lg:pt-0  pt-[100px] items-center">
        <h1 className="font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl mb-3">Luxury at its Peak</h1>
        <p className="font-light text-center mb-6">Find variety of options that suits you and you family. Adozillion homes is here to make your life easy.</p>
        <button className="bg-secondary text-white px-6 py-2 text-xl font-light rounded-[2px]">Get Started</button>
      </div>
      <div className="flex flex-wrap justify-between mb-[100px] lg:px-[89px] mt-[30px] px-[30px]">
        {ProjectData.map((item) => {
          return (
            <div className="lg:w-[23%] sm:w-[48%] w-full md:mb-0 mb-3 text-secondary" key={item.id}>
              <img src={item.img} className="w-full h-[200px] lg:h-[300px]" alt="" />
              <p className="font-bold py-3 underline">{item.name}</p>
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
