import React, { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.png";
import { BsFillPlayFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const [navState, setNavState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const Links = [
    { id: 1, link: "home", linkName: "home" },
    { id: 2, link: "about_us", linkName: "about us" },
    {
      id: 3,
      link: "projects",
      linkName: "projects",
      project: [
        { id: 1, projectLink: "https://www.montecarlolagos.com/", projectName: "Monte Carlo Lagos" },
        { id: 4, projectLink: "https://mufasaapartments.com/", projectName: "Mufasa Apartment" },
        { id: 3, projectLink: "eco_value_garden_city", projectName: "Eco Value Garden City" },
        { id: 2, projectLink: "alpha_tribe", projectName: "Alpha Tribe Co-operative club" },
        // { id: 4, projectLink: "", projectName: "" },
      ],
    },
    { id: 4, link: "blog", linkName: "blog" },
    { id: 5, link: "contact", linkName: "contact" },
  ];

  return (
    <header className="transition-all fixed top-0 left-0 w-full backdrop-blur-sm bg-white/60 text-black/70 flex flex-col md:flex-row justify-between items-center lg:px-[89px] sm:px-[30px] px-[15px] py-2 z-[2000]">
      <div className="w-full md:w-auto flex justify-between">
        <img className="sm:w-auto w-[150px] cursor-pointer" src={Logo} alt="" onClick={() => navigate("/")} />
        <div className="md:hidden" onClick={() => setNavState(!navState)}>
          {!navState ? <HiOutlineMenu className="text-4xl" /> : <IoMdClose className="text-4xl" />}
        </div>
      </div>
      <nav className={`transition-all duration-500 md:h-auto ease-linear lg:w-1/2 md:w-2/3 w-full ${navState ? "h-auto" : "h-0"} md:overflow-visible overflow-hidden`}>
        <ul className="w-full flex md:flex-row flex-col justify-between py-5">
          {Links.map((LINK, index) => {
            return LINK.project ? (
              <div className="relative group" key={index}>
                <p className="font-semibold capitalize cursor-pointer flex md:mb-0 group-hover:mb-0 mb-12 items-center" key={index}>
                  {LINK.linkName} <BsFillPlayFill className="text-[14px] ml-1" />
                </p>
                <div className="md:absolute hidden group-hover:flex flex-col w-[400px] h-[auto] md:left-[-200%] left-[30px] rounded-xl px-5 py-4 bg-white">
                  {LINK.project.map((project, id) => {
                    return (
                      <Link to={project.projectLink} target={id === 0 || id === 1 ? "_blank" : "_parent"} className="font-semibold mb-4 capitalize" key={id} onClick={() => setNavState(false)}>
                        <p>{project.projectName}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link to={LINK.link === "home" ? "/" : LINK.link} className="font-semibold md:mb-0 mb-12 capitalize" key={index} onClick={() => setNavState(false)}>
                <p>{LINK.linkName}</p>
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
