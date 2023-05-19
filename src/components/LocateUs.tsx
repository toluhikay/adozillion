import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const LocateUs = () => {
  return (
    <section className="w-full">
      <div data-aos="flip-right" data-aos-duration="500" className="bg-black flex flex-wrap justify-between items-center mt-20 w-full lg:py-16 md:py-12  overflow-hidden py-6 lg:px-24 md:px-12 px-6">
        <div data-aos="flip-up" data-aos-duration="800" className="md:w-[42%] w-full h-[400px] md:mb-0 mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6571687379833!2d3.4863352759288166!3d6.438057124148441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bff7b601f46df%3A0x7b9ca29fb13ec179!2sAdozillion%20Homes%20and%20Realty!5e0!3m2!1sen!2sus!4v1683746212846!5m2!1sen!2sus"
            title="Adozillion Homes"
            // width="600"
            // height="450"
            // style="border:0;"
            allowFullScreen={true}
            className=" w-full h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div data-aos="flip-left" data-aos-duration="1000" className="md:w-[57%] flex flex-col justify-center w-full md:py-12 h-[400px] lg:px-16 md:px-12 p-3  bg-primary">
          <h2 className="text-xl md:text-2xl font-bold text-white">How can you locate Us?</h2>
          <p className="my-[12px] lg:w-[80%] text-white">Adozillion Homes comfortably seats at 15C Eru’Ifa street, in the heart of Ikate, Lekki phase 1.</p>
          <a href="https://goo.gl/maps/WD2VdyEykMivwiFJA" target="blank">
            <button className="flex justify-center items-center bg-gradient-to-b bg-white text-primary font-semibold px-5 py-3 rounded-[2px] outline-none border-none">
              Get Direction <FaTelegramPlane className="ml-2" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocateUs;
