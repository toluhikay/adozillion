import React from "react";
import Logo from "../assets/images/FooterLogo.png";
import { LocationIcon, WorldIcon, FacebookIcon, TwitterIcon, YouTubeIcon, LinkedInIcon, InstagramIcon } from "../assets/svgs/FooterSvgs";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const SOCIALS = [
    { id: 1, link: "", icon: <FacebookIcon /> },
    { id: 2, link: "", icon: <TwitterIcon /> },
    { id: 3, link: "", icon: <YouTubeIcon /> },
    { id: 4, link: "", icon: <LinkedInIcon /> },
    { id: 5, link: "", icon: <InstagramIcon /> },
  ];
  const Links = [
    { id: 1, link: "home", linkName: "home" },
    { id: 2, link: "about_us", linkName: "about us" },
    {
      id: 3,
      link: "projects",
      linkName: "projects",
      project: [
        { id: 1, projectLink: "", projectName: "" },
        { id: 1, projectLink: "", projectName: "" },
        { id: 1, projectLink: "", projectName: "" },
        { id: 1, projectLink: "", projectName: "" },
      ],
    },
    { id: 4, link: "blog", linkName: "blog" },
    { id: 5, link: "contact", linkName: "contact" },
  ];
  const DATE = new Date().getFullYear();

  return (
    <footer className="mt-[50px] bg-black text-[#ABB5BE] lg:pt-[146px] md:pt-[70px] pt-[50px] lg:px-[123px] md:px-[50px] px-[30px]">
      <div className="flex sm:flex-row flex-col justify-between mb-12">
        <div className="sm:w-auto w-full">
          <img src={Logo} alt="" />
          <div className="flex items-center mt-4">
            <LocationIcon />
            <p className="ml-2 text-xl">Lagos, Nigeria</p>
          </div>
          <div className="flex items-center mt-4">
            <WorldIcon />
            <p className="ml-2 text-xl">English(United Kingdom)</p>
          </div>
          <div className="flex items-center py-5">
            {SOCIALS.map((social) => {
              return (
                <a href={social.link} target="_blank" rel="noreferrer" className="mr-2" key={social.id}>
                  {social.icon}
                </a>
              );
            })}
          </div>
        </div>

        {/* pages */}
        <div className="flex flex-col smw-auto w-full items-start sm:justify-end sm:items-end">
          <p className="text-white font-bold mb-6 sm:mt-0 mt-12">Pages</p>
          <div className="flex flex-col sm:justify-end sm:items-end items-start">
            {Links.map((LINK, index) => {
              return LINK.project ? (
                <p className="flex items-center capitalize mb-3 hover:text-yellow-600 cursor-pointer" key={index}>
                  {LINK.linkName} <BsFillPlayFill className="text-[14px] ml-1" />
                </p>
              ) : (
                <Link to={LINK.link} className="capitalize font-semibold mb-3 hover:text-yellow-600" key={index}>
                  <p>{LINK.linkName}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-4 border-t text-xs">
        <p>Copyrights © {DATE} Adozillion Homes and Realty Ltd- All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
