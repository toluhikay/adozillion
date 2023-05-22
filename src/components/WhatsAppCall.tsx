import React from "react";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";

const WhatsAppCall = () => {
  return (
    <div className="fixed bottom-0 lg:px-[89px] px-[15px] w-full lg:py-12 items-center pb-12 z-[20000] flex justify-between">
      <div className="bg-secondary text-primary rounded-full p-3 text-3xl ">
        <IoMdCall />
      </div>
      <div className="bg-secondary text-primary rounded-full p-3 text-3xl ">
        <IoLogoWhatsapp />
      </div>
    </div>
  );
};

export default WhatsAppCall;
