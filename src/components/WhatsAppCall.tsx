import React from "react";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";

const WhatsAppCall = () => {
  return (
    <div className="fixed bottom-0 lg:px-[25px] px-[15px] w-full lg:py-6 items-center pb-4 z-[20000] flex lg:justify-end justify-between">
     <a href="tel:+2348038284915">
      <div className="bg-white border border-primary lg:hidden text-blue-700 rounded-full p-3 text-2xl sm:text-3xl lg:text-5xl ">
        <IoMdCall />
      </div>
     </a>
      <a href="https://api.whatsapp.com/send?phone=2349155170650&amp;text=Hello! I'm reaching out from the Adozillion Homes website." target="_blank" rel="noreferrer" className="bg-white border border-primary text-green-600 rounded-full p-3 text-2xl sm:text-3xl lg:text-5xl ">
        <IoLogoWhatsapp />
      </a>
    </div>
    
  );
};

export default WhatsAppCall;
