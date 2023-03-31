import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import NewWidget from "../components/NewWidget";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header /> 
      <Hero />
      <Features />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
