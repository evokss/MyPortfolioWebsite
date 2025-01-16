import React from "react";
import Navbar from "../../components/common/NavBar";
import AboutPage from "../../components/about/AboutPage";
import { StarryBackground } from "@/components/starryBackground";

const page = () => {
  return (
    <>
      <Navbar />
      <StarryBackground>
        <AboutPage />
      </StarryBackground>
    </>
  );
};

export default page;
