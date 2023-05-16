import React from "react";
import NavBar from "../components/NavBar";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import LandingPage from "../pages/LandingPage";
import AboutUs from "../pages/AboutUs";
import ContactUsPage from "../pages/ContactUsPage";
import MufasaApartments from "../pages/MufasaApartments";
import AlphaTribe from "../pages/AlphaTribe";
import ValueGarden from "../pages/ValueGarden";

const Router = () => {
  return (
    <div className="w-full max-w-[1800px]">
      <NavBar />
      <div>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="alpha_tribe" element={<AlphaTribe />} />
          <Route path="mufasa_apartment" element={<MufasaApartments />} />
          <Route element={<ValueGarden />} path="value_garden_city" />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Router;
