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
import EvgcSb from "../pages/EvgcSub";
import Footer from "../components/Footer";

const Router = () => {
  return (
    <div className="w-full relative overflow-x-hidden max-w-[1800px]">
      <NavBar />
      <div>
        <Routes>
          {/* <Route index element={<LandingPage />} /> */}
          <Route index element={<LandingPage1 />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="alpha_tribe" element={<AlphaTribe />} />
          <Route path="mufasa_apartment" element={<MufasaApartments />} />
          <Route element={<ValueGarden />} path="eco_value_garden_city" />
          <Route path="evgc_subform" element={<EvgcSb />} />
        </Routes>
      </div>
      <WhatsAppCall />
      <Socials />
      {/* <Footer /> */}
    </div>
  );
};

export default Router;
