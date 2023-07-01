import React from "react";
import NavBar from "../components/NavBar";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import ContactUsPage from "../pages/ContactUsPage";
import MufasaApartments from "../pages/MufasaApartments";
import AlphaTribe from "../pages/AlphaTribe";
import ValueGarden from "../pages/ValueGarden";
import WhatsAppCall from "../components/WhatsAppCall";
import Socials from "../components/Socials";
import LandingPage1 from "../pages/LandingPage1";

import Blog from "../pages/Blog.js";
import EvgcSb from "../pages/EvgcSub";
import Footer from "../components/Footer";
import { createPortal } from "react-dom";
import PictureModal from "../components/PictureModal";
import Blogs from "../pages/Blogs";

const Router = () => {
  const portals: any = document.getElementById("portals");
  return (
    <div className="w-full relative overflow-x-hidden max-w-[2500px]">
      <NavBar />
      <div>
        <Routes>
          {/* <Route index element={<LandingPage />} /> */}
          <Route index element={<LandingPage1 />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="alpha_tribe" element={<AlphaTribe />} />
          <Route path="mufasa_apartment" element={<MufasaApartments />} />

          <Route element={<ValueGarden />} path="value_garden_city" />
          {/* <Route element={<Blog />} path="/blog" />  */}

          <Route path="blog" element={<Blogs />} />
          <Route element={<ValueGarden />} path="eco_value_garden_city" />
          <Route path="evgc_subform" element={<EvgcSb />} />
        </Routes>
      </div>
      {createPortal(<PictureModal />, portals)}
      <WhatsAppCall />
      <Socials />
      {/* <Footer /> */}
    </div>
  );
};

export default Router;
