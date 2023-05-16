import React from "react";
import PagesHero from "../common/PagesHero";
import HeaderDiv from "../common/HeaderDiv";
import InspectionForm from "../forms/InspectionForm";
import ContactUsImage from "../assets/images/ContactUsImage.png";
import MessageForm from "../forms/MessageForm";
import Subscribe from "../components/Subscribe";

const ContactUsPage = () => {
  const bgImage = "url('/src/assets/images/ContactUsBg.png')";

  return (
    <div>
      <PagesHero bgImage="url('/src/assets/images/CustomerSupportImage.jpeg')" header={<HeaderDiv h1="contact us" textCase="capitalize" p="Schedule a visit" />} />
      <div className="lg:px-[89px] px-[30px] flex flex-col justify-center items-center lg:pt-[140px] md:pt-[100px] py-[50px]">
        <p className="text-xl font-bold text-primary pb-[17px]">Contact Us</p>
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold md:mb-[30px] mb-5">Schedule a visit</h2>
        <p className="text-center lg:w-[40%]">You can schedule a visit to inspect our properties. Kindly choose an appropriate date and time or reach out to us via</p>
        <div className="md:flex justify-between w-full lg:my-[100px] md:py-[70px] py-[50px]">
          <div className="md:w-[48%] w-full md:mb-0 mb-12">
            <img src={ContactUsImage} className="w-full" alt="" />
          </div>
          <div className="md:w-[48%] w-full h-full">
            <InspectionForm />
          </div>
        </div>
        <div className="w-full">
          <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center">Or Leave a message</h2>
          <MessageForm />
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default ContactUsPage;
