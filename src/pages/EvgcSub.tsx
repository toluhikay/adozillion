import React from "react";
import EvgcSubForm from "../forms/EvgcSubForm";
import Footer from "../components/Footer";

const EvgcSb = () => {
  return (
    <div>
      <div className="flex flex-col w-full lg:px-[89px] sm:px-[30px] py-[100px] px-[15px] justify-center items-center text-white min-h-screen bg-gray-300">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">Eco Value Garden City Subscription Form</h1>
        <div className="w-full flex justify-center mt-12">
          <EvgcSubForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EvgcSb;
