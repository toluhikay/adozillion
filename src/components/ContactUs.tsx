import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import CustomerCare from "../assets/images/CustomerSupportImage.jpeg";

const ContactUs = () => {
  const CONTACTDATA = [
    { id: 1, label: "call", icon: <FiPhoneCall />, value: "08090000000", link: "tel" },
    { id: 2, label: "email", icon: <MdMarkEmailUnread />, value: "Adozillion@gmail.com", link: "adozil" },
    { id: 3, label: "whatsapp", icon: <IoLogoWhatsapp />, value: "08090000000", link: "whatsapp" },
    { id: 4, label: "instagram", icon: <AiFillInstagram />, value: "@Adozillion", link: "instage" },
  ];

  return (
    <section className="w-full">
      <div className="w-full lg:my-[123px] lg:pl-[89px] lg:pt-0 md:pt-0 pt-[70px]">
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold lg:text-start text-center">Contact Us</h2>
        <div className="flex flex-wrap lg:flex-row flex-col-reverse justify-between my-12 items-center">
          <div className="flex flex-wrap lg:w-[49%] w-full lg:mb-0 mb-12 lg:p-0 md:p-12 p-[30px] justify-between">
            {CONTACTDATA.map((item, index) => {
              return (
                <div className="bg-white shadow-lg sm:w-[48%] w-full mb-12 py-12 px-9" key={index}>
                  <div className="flex w-full xl:flex-row lg:flex-col justify-between items-center capitalize mb-7">
                    <div className="bg-[#B8934921] text-xl p-4">{item.icon}</div>
                    <div className="xl:text-start lg:text-center text-start xl:mt-0 lg:mt-3">
                      <p>{item.label}</p>
                      <p className="text-xs">{item.value}</p>
                    </div>
                  </div>
                  <div className="w-full bg-[#EED7AB] flex items-center justify-center">
                    <a href={item.link} className="flex w-full justify-center items-center py-2 capitalize cursor-pointer" target="blank">
                      {item.label} now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lg:w-[48%] w-full bg-[url('/src/assets/images/CustomerSupportImage.jpeg')] rounded-l-full sm:py-6 sm:pl-6 py-3 pl-3 bg-blend-darken bg-black/30 backdrop-blur-sm">
            <img src={CustomerCare} className="w-full rounded-l-full" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
