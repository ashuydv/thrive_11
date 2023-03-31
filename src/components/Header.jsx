import React from "react";
import HeroImg from "../assets/hero.png";
 
const Header = () => {
  return (
    <div>
      <header class="text-gray-400 fixed z-20 w-full body-font sm:flex sm:items-center sm:justify-between ">
        <div class="container mx-auto flex flex-wrap md:p-5 md:px-12 sm:py-2 sm:px-8 md:flex-row items-center sm:flex-row sm:w-full">
          <a class="flex title-font font-medium items-center text-white mb-4 sm:mb-0 md:mb-0">
            <img src={HeroImg} alt="logo" className="logo" />
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* <a class="mr-5 hover:text-white">First Link</a>
            <a class="mr-5 hover:text-white">Second Link</a>
            <a class="mr-5 hover:text-white">Third Link</a>
            <a class="mr-5 hover:text-white">Fourth Link</a> */}
          </nav>
          <button class="inline-flex items-center text-white bg-gradient-to-tr from-orange-600 to-amber-500 border-0 py-1 px-5 focus:outline-none hover:bg-gray-700 rounded-full text-lg sm:mt-0 md:mt-0 ">
            Coming Soon
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1 hover:ml-4 transition-all duration-300 ease-in-out"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
