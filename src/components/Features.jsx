import React from "react";
import Stock from "../assets/stock.png";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";
import feature5 from "../assets/feature5.png";
import feature6 from "../assets/feature6.png";

const Features = () => {
  return (
    <div>
      <section className="text-gray-400 bg-black body-font relative" id="feature-section">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div class="flex flex-col text-center w-full mb-20 sm:mb-0" id="title__section">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 sm:mb-0 text-white">
              Why Thrive11?
            </h1>
          </div>
          <div className="flex justify-between" id="feature_section">
            <div className="flex justify-around flex-col" id="feature__cards">
              <div class="w-80 flex items-center p-4 ml-16 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-10 feature_card">
                <div class="w-16 h-16 bg-transparent object-cover object-center flex-shrink-0 rounded-full mr-4  relative">
                  {/* <i class="fa-regular fa-user absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl "></i> */}
                  <img src={feature1} alt="" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg font-medium">Fun & Learn</h2>
                  <p class="text-gray-300 text-sm font-normal ">
                    Most entertaining way to learn stocks
                  </p>
                </div>
              </div>
              <div class="w-80 flex items-center p-4 mr-12 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-10 feature_card">
                <div class="w-16 h-16 bg-transparent object-cover object-center flex-shrink-0 rounded-full mr-4 relative">
                  {/* <i class="fa-solid fa-money-bills absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl "></i> */}
                  <img src={feature2} alt="" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg font-medium">
                    Earn Rewards Instantly
                  </h2>
                  <p class="text-gray-300 text-sm font-normal ">
                    Play various contests on bullspree & earn rewards in return
                  </p>
                </div>
              </div>
              <div class="w-80 flex items-center p-4 ml-16 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-10 feature_card">
                <div class="w-16 h-16 bg-transparent object-cover object-center flex-shrink-0 rounded-full mr-4 relative">
                  {/* <i class="fa-solid fa-shield-halved absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl "></i> */}
                  <img src={feature3} alt="" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg font-medium">
                    Secure & Fast Payment
                  </h2>
                  <p class="text-gray-300 text-sm font-normal ">
                    Authentic payment gateway for all your transactions
                  </p>
                </div>
              </div>
            </div>
            <div className="img-section">
              <img
                className="w-[600px] h-[600px] space-y-16 object-cover object-center rounded-full border-spacing-60 m-2 border-dashed border-2 border-white"
                alt=""
                src={Stock}
              />
            </div>
            <div className="flex justify-around flex-col" id="feature__cards feature_card_two">
              <div class="w-80 flex items-center p-4 mr-16 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-10 feature_card_two">
                <div class="w-16 h-16 bg-transparent object-cover object-center flex-shrink-0 rounded-full mr-4 relative">
                  {/* <i class="fa-solid fa-graduation-cap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl "></i> */}
                  <img src={feature4} alt="" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg font-medium">
                    Experience Stock Market
                  </h2>
                  <p class="text-gray-300 text-sm font-normal ">
                    Accelerate your stock market knowledge
                  </p>
                </div>
              </div>
              <div class="w-80 flex items-center p-4 ml-12 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-10 feature_card_two">
                <div class="w-16 h-16 bg-transparent object-cover object-center flex-shrink-0 rounded-full mr-4 relative">
                  {/* <i class="fa-solid fa-tv absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl "></i>
                   */}
                  <img src={feature5} alt="" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg font-medium">
                    Live Leaderboard
                  </h2>
                  <p class="text-gray-300 text-sm font-normal ">
                    Compete with peers and feel the adrenaline rush
                  </p>
                </div>
              </div>
              <div class="w-80 flex items-center p-4 mr-16 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-10 feature_card_two">
                <div class="w-16 h-16 bg-transparent object-cover object-center flex-shrink-0 rounded-full mr-4  relative">
                  {/* <i class="fa-solid fa-puzzle-piece absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl "></i> */}
                  <img src={feature6} alt="" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg font-medium">
                    Risk-Free Gaming
                  </h2>
                  <p class="text-gray-300 text-sm font-normal ">
                    Experience the thrill of real-life stock market with our
                    contests
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="absolute top-[27%] left-[27%] w-8 h-8 bg-gradient-to-tr from-red-600 to-orange-600 rounded-full z-0 "></div> */}
      </section>
    </div>
  );
};

export default Features;
