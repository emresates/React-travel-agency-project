import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import ScrollIntoView from "./Scroll";

function Contact() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg"
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
      <ScrollIntoView />
    </>
  );
}

export default Contact;
