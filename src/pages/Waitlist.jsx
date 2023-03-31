import React from "react";
import Helmet from "react-helmet";
import "../App.css";
import Footer from "../components/Footer";
import HeaderBack from "../components/HeaderBack";

const Waitlist = () => {
  return (
    <div>
      <HeaderBack />
      <section
        class="text-gray-400 bg-black body-font min-h-screen "
        id="waitlist__embed"
      >
        <div class="container px-32 py-40">
          <div class=" w-1/2 flex items-center justify-center mx-auto rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 z-10 px-4 py-12" id="waitlist__card" >
            <div
              id="getWaitlistContainer"
              data-waitlist_id="5793"
              className=" flex items-center text-center justify-center mx-auto"
            ></div>
          </div>
        </div>
      </section>
      <Footer />
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
        <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
      </Helmet>
    </div>
  );
};

export default Waitlist;
