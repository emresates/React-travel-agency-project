import React from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Services from "../components/Service/Services";
import ScrollIntoView from "./Scroll";

function Service() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg"
        title="Service"
        btnClass="hide"
      />
      <Services />
      <Footer />
      <ScrollIntoView />
    </>
  );
}
export default Service;
