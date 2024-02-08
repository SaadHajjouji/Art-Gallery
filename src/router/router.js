import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import DataCenter from "../API/DataCenter";
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminLogin from "../components/admin/AdminLogin";
import Devis from "../components/devis/Devis";
import ErrorComponent from "../components/ErrorComponent";

// pges imports
import Home from "../components/Home/Home";
import Exhibitions from "../components/Exhibitions/Exhibitions";
import Exhibition from "../components/Exhibitions/Exhibition";
import Artists from "../components/Artists/Artists";
import Artist from "../components/Artists/Artist";
import Events from "../components/Events/Events";
import NftHome from "../components/NFTS/NftHome";
import Contact from "../components/Contact/Contact";
import Tours from "../components/360tours/Tours";
import Tour from "../components/360tours/View360";
import TheGallery from "../components/theGallery/TheGallery";
import "../sass/_main.scss";
const AllRoutes = () => {
  return (
    <DataCenter>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/exhibition/:id" element={<Exhibition />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/events" element={<Events />} />
          <Route path="/nfts" element={<NftHome />} />
          <Route path="/gallery" element={<TheGallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/360tours" element={<Tours />} />
          <Route path="/360view/:id" element={<Tour />} />
          <Route path="/devis/:id" element={<Devis />} />
          <Route path="/4FLL-BZWB-NFN9-PUPV" element={<AdminLogin />} />
          <Route path="/adminDash" element={<AdminDashboard />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </HashRouter>
    </DataCenter>
  );
};

export default AllRoutes;
