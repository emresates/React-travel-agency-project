import React from "react";
import Destination from "../components/Destination/Destination";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Trip from "../components/Trip.js/Trip";
import ScrollIntoView from "./Scroll";

function Home() {
  return (
    <>    
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1522509585149-c9cd39d1ff08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1197&q=80"
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />

      <Destination />
      <Trip />
      <Footer />
      <ScrollIntoView />
    </>
  );
}

export default Home;
