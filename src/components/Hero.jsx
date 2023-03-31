import React from "react";
import "../App.css";
import Vid from "../assets/video.mp4";
import HeroImg from "../assets/hero.png";
import four from "../assets/four.png";

const Hero = () => {
  return (
    <div>
      <section
        class="text-gray-400 bg-black body-font h-[100vh] relative overflow-hidden"
        id="hero"
      >
        <div
          class="container mx-auto flex py-24 md:flex-row flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          id="waitlist"
        >
          <div
            class="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
            id="first-child"
          >
            <h1 class="title-font mb-4 font-medium text-white">
              You look{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-orange-300 to-orange-600">
                invested !!{" "}
              </span>
              <br class="hidden lg:inline-block" />
              <span id="small-texts">
                Thrive11 is your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                  stock with benefits
                </span>{" "}
                partner.
              </span>
            </h1>

            {/* <p class="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p> */}
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-gradient-to-tr from-orange-600 to-amber-500 border-0 rounded-full py-2 px-10 focus:outline-none hover:bg-indigo-600 text-lg mt-4 ">
                Get Started
              </button>
            </div>
          </div>
          <div class="max-w-[1200px]" id="second-child">
            <img
              class=" w-full object-cover object-center rounded"
              alt="hero"
              src={four}
            />
          </div>
        </div>
        <div
          className="absolute z-0 w-auto min-w-full h-[90vh] opacity-50 max-w-none"
          id="video"
        >
          <video src={Vid} autoPlay={true} loop={true} muted></video>
        </div>
      </section>
    </div>
  );
};

export default Hero;
