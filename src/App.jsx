import React, { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Waitlist from "./components/Waitlist";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <div className="relative">
        <Header />
        {/* <Waitlist /> */}
        <Home />
      </div>
      <Footer />
    </div> 
  );
}

export default App;
