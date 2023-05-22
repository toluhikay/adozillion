import React from "react";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";

const WhatsAppCall = () => {
  return (
    <div className="fixed bottom-0 lg:px-[25px] px-[15px] w-full lg:py-6 items-center pb-4 z-[20000] flex justify-between">
      <div className="bg-secondary text-primary rounded-full p-3 text-2xl sm:text-3xl lg:text-5xl ">
        <IoMdCall />
      </div>
      <div className="bg-secondary text-primary rounded-full p-3 text-2xl sm:text-3xl lg:text-5xl ">
        <IoLogoWhatsapp />
      </div>
    </div>
  );
};

export default WhatsAppCall;
