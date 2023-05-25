import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Socials = () => {
  const SOCIALSDATA = [
    { id: 1, link: "https://www.facebook.com/adozillionhomes/", icon: <FaFacebookF /> },
    { id: 2, link: "https://twitter.com/adozillionhomes?s=11&amp;t=mRp2JEH-MyVUm5FNZ5GteQ", icon: <FaTwitter /> },
    { id: 3, link: "https://instagram.com/adozillionhomes?igshid=NDRkN2NkYzU=", icon: <FaInstagram /> },
    { id: 4, link: "https://youtube.com/channel/UCJYGhEi8myUaKpYCrx9KS9Q", icon: <FaYoutube /> },
  ];

  return (
    <div className="fixed right-0 h-full top-0 bottom-0 flex flex-col px-[10px] justify-center">
      {SOCIALSDATA.map((item) => {
        return (
          <a href={item.link} target="_blank" rel="noreferrer" key={item.id}>
            <p className="bg-white border border-primary text-primary rounded-full md:mb-3 mb-1 md:text-xl text-sm p-2">{item.icon}</p>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
