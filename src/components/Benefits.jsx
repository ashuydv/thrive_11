import React from "react";
import one from "../assets/one.png";
import two from "../assets/two.gif";
import three from "../assets/three.png";
import CountUp from "react-countup";

const Benefits = () => {
  return (
    <div>
      <section class="text-gray-400 bg-black body-font">
        <div class="container px-5 py-10 mx-auto flex flex-wrap">
          <div class=" w-[1240px] mx-auto" id="stats">
            <div class="flex flex-wrap w-full relative">
              <img
                alt="gallery"
                class="w-full object-cover object-center block inset-0"
                src={one}
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            class="container px-5 py-10 mx-auto flex flex-wrap z-10 "
            id="stats-bg"
          >
            <div class=" w-[1240px] mx-auto" id="stats">
              <div
                class="flex flex-wrap m-4 mb-24 px-32 py-40 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 text-center z-20 rounded-3xl"
                id="stats__bg"
              >
                <div class="p-4 sm:w-1/3 w-1/2" id="stat_card">
                  <h2 class="title-font font-medium sm:text-4xl text-3xl text-white stats ">
                    <CountUp start={0} end={3} suffix="K+" />
                  </h2>
                  <p class="leading-relaxed text-gray-100 text-lg">
                    Alpha Users
                  </p>
                </div>
                <div class="p-4 sm:w-1/3 w-1/2" id="stat_card">
                  <h2 class="title-font font-medium sm:text-4xl text-3xl text-white stats ">
                    <CountUp start={0} end={100} suffix="+" />
                  </h2>
                  <p class="leading-relaxed text-gray-100 text-lg">
                    Collaborations
                  </p>
                </div>
                <div class="p-4 sm:w-1/3 w-1/2" id="stat_card">
                  <h2 class="title-font font-medium sm:text-4xl text-3xl text-white stats ">
                    <CountUp start={0} end={4.5} suffix="K+" />
                  </h2>
                  <p class="leading-relaxed text-gray-100 text-lg">Waitlists</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-20 h-20 bg-gradient-to-tr from-orange-500 to-red-700 blur-3xl rounded-full top-2/3 left-25 z-0"></div>
          <div className="absolute w-32 h-32 bg-gradient-to-tr from-green-500 to-emerald-700 blur-3xl rounded-full top-20 right-20 z-0"></div>
        </div>
        <div class="container px-5 py-10 mx-auto flex flex-wrap">
          <div class=" w-[1240px] mx-auto" id="stats">
            <div class="flex flex-wrap w-full relative">
              <img
                alt="gallery"
                class="w-full object-cover object-center block inset-0 rounded-3xl "
                src={two}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
