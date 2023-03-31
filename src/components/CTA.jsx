import React from "react";
import Typewriter from "typewriter-effect";

const CTA = () => {
  return (
    <div>
      <section class="text-gray-50 bg-black body-font" id="cta">
        <div class="container px-36 py-24 mx-auto ">
          <div
            class="flex flex-col text-center bg-gradient-to-br from-amber-400 via-orange-600 to-orange-800 rounded-3xl w-full p-20 py-32"
            id="cta__container"
          >
            <h1 class="sm:text-3xl title-font font-bold text-center text-white flex items-center justify-center mb-5">
              <span id="text" className="pr-2">
                Your
              </span>
              <Typewriter
                options={{
                  strings: ["Hello", "World"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  delay: 100,
                  deleteSpeed: 0,
                  pauseFor: 1000,
                }}
              />
              <span id="text" className="pl-2">
                is worth more !!
              </span>
            </h1>
            <button
              class="text-black bg-gradient-to-tr from-gray-50 to-gray-100 shadow-md shadow-black py-2 px-10 mt-12 focus:outline-none hover:bg-gray-50 rounded-full w-max mx-auto text-xl"
              id="btn-cta"
            >
              Book a Demo Today !!
            </button>
            <ul
              className="flex items-center justify-center text-center w-[820px] mt-12 mx-auto"
              id="lists"
            >
              <li className=" text-lg flex items-start w-72 text-center ">
                <span className="mx-2">
                  <i class="fa-solid fa-star-of-life"></i>
                </span>
                24/7 Support
              </li>
              <li className=" text-lg flex items-start w-72 text-center ">
                <span className="mx-2">
                  <i class="fa-solid fa-star-of-life"></i>
                </span>
                Full access to all features
              </li>
              <li className=" text-lg flex items-start w-72 text-center ">
                <span className="mx-2">
                  <i class="fa-solid fa-star-of-life"></i>
                </span>
                Trusted by the top coaches
              </li>
            </ul>
          </div>
          {/* <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
      <div class="relative sm:mb-0 flex-grow w-full">
        <label for="full-name" class="leading-7 text-sm text-gray-400">Full Name</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative sm:mb-0 flex-grow w-full">
        <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <button class="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button>
    </div> */}
        </div>
      </section>
    </div>
  );
};

export default CTA;
