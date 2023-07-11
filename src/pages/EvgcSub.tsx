import React from "react";
import EvgcSubForm from "../forms/EvgcSubForm";
import Footer from "../components/Footer";

const EvgcSb = () => {
  return (
    <div>
      <div className="bg-[url('/src/assets/images/EvgcBg.jpeg')] bg-blend-overlay bg-black/70 bg-no-repeat bg-center bg-cover flex flex-col w-full lg:px-[89px] sm:px-[30px] lg:py-[150px] py-[100px] px-[15px] justify-center items-center lg:text-start min-h-screen">
        <h1 className="text-green-100  lg:text-3xl md:text-2xl text-xl font-light">Mufasa Apartments Subscription Form</h1>
        <div className="w-full flex justify-center mt-3">
          <EvgcSubForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EvgcSb;
