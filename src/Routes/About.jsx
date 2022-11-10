import React from "react";
import Aboutus from "../components/Aboutus/Aboutus";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import ScrollIntoView from "./Scroll";

function About() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
        title="About"
        btnClass="hide"
      />
      <Aboutus />
      <Footer />
      <ScrollIntoView />
    </>
  );
}

export default About;
