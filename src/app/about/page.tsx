import React from "react";
import AboutHero from "../Component/AboutHero";
import AboutSection from "../Component/AboutSection";
import AboutProduct from "../Component/AboutProduct";


const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutSection/>
			<AboutProduct />
    </div>
  );
};

export default page;
