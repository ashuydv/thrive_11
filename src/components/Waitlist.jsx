import React from "react";
import Stock from "../assets/stock.png";
import "../App.css"
import Vid from "../assets/video.mp4";

const Waitlist = () => {
  return (
    <div> 
      <section class="text-gray-400 bg-black body-font h-screen relative overflow-hidden" id="video-banner" >
        <div class="container mx-auto flex px-32 py-24 md:flex-row flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" id="waitlist" >
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-full md:mb-0 mb-10 sm:mb-2" id="first-child">
            <img
              class="object-cover object-center"
              alt="hero"
              src={Stock}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center" id="second-child" >
            {/* <span class="inline-block py-1 px-5 tracking-wide bg-gradient-to-tr from-gray-900 to-black shadow-sm shadow-slate-900 text-gray-300 text-opacity-100 text-sm font-medium rounded-full mb-4">
              Coming Soon
            </span> */}
            <h1 class="title-font sm:text-4xl md:text-5xl mb-4 font-semibold text-white">
              The New Standard {" "}  
              <br class="hidden lg:inline-block sm:ml-2" />
              of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
                Stock Trading
              </span>
            </h1>
            <h4 class="mb-8 text-xl text-gray-50 leading-relaxed">
            Trade your way to the top with THR11VE - where fantasy meets finance!
            </h4>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-gradient-to-tr from-purple-700 to-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded-full text-lg">
                Coming Soon 
              </button>
              {/* <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded-full text-lg">
                Whitepaper
              </button> */}
            </div>
          </div>
        </div>
        <div className="absolute z-0 w-auto min-w-full h-[90vh] opacity-50 max-w-none" id="video">
            <video src={Vid} autoPlay={true} loop={true} muted ></video>
        </div>
      </section>
    </div>
  );
};

export default Waitlist;
