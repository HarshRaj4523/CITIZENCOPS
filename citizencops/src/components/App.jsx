import React, { useState } from "react";
import Register from "./Register";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes"
import { ProtectedRoutes2 } from "./ProtectedRoutes2";
import PoliceSign from "./PoliceSign";
import Footer from "./Footer";
import Home from "./home";
import NavbarLogin from "./NavbarLogin";
import CitizenSign from "./CitizenSign";
import LodgeComplaint from "./LogdeComplaint";
import ComplaintComponent from "./ComplaintComponent";
import NavbarPoliceLogin from "./NavbarPoliceLogin";
import Solved from "./Solved";
import Pending from "./Pending";
import ContactUs from "./ContactUs";
import Statistics from "./Statistics";

import Cookies from "universal-cookie";
const cookies = new Cookies();


function App() {
  var nvbr = <Navbar />;
  useState(() => {
    const token = cookies.get("TOKEN");
    if(token)
    {
      nvbr = <NavbarLogin />
    }
    else
    {
      const policetoken = cookies.get("POLICETOKEN");
      if(policetoken)
      {
        nvbr = <NavbarPoliceLogin />
      }
      else
        nvbr = <Navbar />
    }
  })

  return (

    <>
      {nvbr}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<CitizenSign />} />
        <Route path="/police-login" element={<PoliceSign />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/lodgecomplaint" element={<LodgeComplaint />} />
          <Route path="/yourcomplaint" element={<ComplaintComponent />} />
          <Route path="/viewstats" element={<Statistics />} />
        </Route>

        <Route element={<ProtectedRoutes2 />}>
          <Route path="/pending" element={<Pending />} />
          <Route path="/solved" element={<Solved />} />
        </Route>

      </Routes>

      <Footer />
    </>
    

  );
}

export default App;
