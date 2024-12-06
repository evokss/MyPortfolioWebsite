import React from "react";
import Image from "next/image";
import { TbClick } from "react-icons/tb";

const ProfileSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center mx-auto px-4 sm:px-6 lg:px-8">
      {/* Left column: Text, link, and button */}
      <section className="flex flex-col justify-center pt-4 pb-10 px-12 lg:pt-10">
        {/* Main heading */}
        <h1 className="text-3xl text-center font-bold mb-2 text-orange-400 md:text-4xl lg:text-5xl lg:text-left">
          <span className="block md:inline md:mr-2">Hi!</span>
          I'm Eva Koss
        </h1>
        {/* Subheading */}
        <h2 className="text-2xl text-center mb-6 text-gray-900 lg:text-left md:text-2xl lg:text-3xl">
          Frontend developer.
        </h2>
        {/* Links and button */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Resume download link */}
          <div className="text-center sm:text-left">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-md font-bold text-gray-900 hover:text-orange-400"
            >
              DOWNLOAD MY RESUME
              <TbClick className="mt-2 text-sm text-gray-600" />
            </a>
            <p>or you can also:</p>
          </div>
          {/* Contact button */}
          <button
            className="
              rounded-full text-sm sm:text-base 
              text-white bg-rose-600 hover:bg-rose-400 
              px-4 py-2 transition-colors duration-300"
          >
            CONTACT ME
          </button>
        </div>
      </section>

      {/* Right column: Image */}
      <div className="flex justify-center pt-10 pb-2 order-first lg:order-last lg:pb-10">
        <Image
          className="rounded-3xl animate-slow-up-down max-w-full h-auto cursor-pointer hover:animation-paused"
          src="/images/eva-image.jpg"
          width={400}
          height={400}
          quality={95}
          alt="Eva Koss"
        />
      </div>
    </div>
  );
};

export default ProfileSection;
