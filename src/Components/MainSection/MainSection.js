import React from "react";
import AboutUs from "./AboutUs";
import Appointment from "./Appointment";
import Contatct from "./Contatct";
import FAQ from "./Faq";
import Service from "./Service";
import Testimonial from "./Testimonial";
import WhyUs from "./WhyUs";

function MainSection() {
  return (
    <>
      <main id="main">
        <WhyUs />
        <AboutUs />
        <Appointment />
        <Service />
        <FAQ />
        <Testimonial />
        {/* <Contatct /> */}
      </main>
    </>
  );
}

export default MainSection;
