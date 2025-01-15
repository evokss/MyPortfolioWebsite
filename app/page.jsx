"use client";

import React from "react";
import Navbar from "../components/common/NavBar";
import HomePage from "../components/home/HomePage";

import { StarryBackground } from "../components/StarryBackground";

const page = () => {
  return (
    <>
      <Navbar />
      <StarryBackground>
        <HomePage />
      </StarryBackground>
    </>
  );
};

export default page;
