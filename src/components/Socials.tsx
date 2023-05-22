import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Socials = () => {
  const SOCIALSDATA = [
    { id: 1, link: "", icon: <FaFacebookF /> },
    { id: 2, link: "", icon: <FaTwitter /> },
    { id: 3, link: "", icon: <FaInstagram /> },
    { id: 4, link: "", icon: <FaYoutube /> },
  ];

  return (
    <div className="fixed right-0 h-full top-0 bottom-0 flex flex-col px-[10px] justify-center">
      {SOCIALSDATA.map((item) => {
        return (
          <a href="d" key={item.id}>
            <p className="bg-secondary text-primary rounded-full md:mb-3 mb-1 md:text-xl text-sm p-2">{item.icon}</p>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
