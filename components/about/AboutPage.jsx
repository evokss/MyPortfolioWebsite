import React from "react";
import { IoLanguageOutline } from "react-icons/io5";
import {
  PiGraduationCapLight,
  PiHeartLight,
  PiBookOpen,
  PiBriefcaseLight,
  PiFileCodeLight,
  PiDownloadSimple,
} from "react-icons/pi";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section with Resume Download */}
      <div className="mb-16 text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl md:text-6xl text-orange-400 mb-6 ">
          About Me
        </h1>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Frontend Developer with 6 years of development experience,
            passionate about creating robust, visually appealing, and impactful
            web applications.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="/Resume_Frontend-React-Developer_Eva-Koss.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white dark:text-gray-100 px-6 py-3 rounded-lg transition-colors duration-200 bg-rose-600 hover:bg-rose-400 dark:hover:bg-rose-700"
          >
            Download Resume (PDF)
            <PiDownloadSimple className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* My Story Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-orange-400">My Story</h2>
        <div className="space-y-4">
          <div className="bg-white border-2 border-orange-300 dark:bg-white/5 dark:border-rose-600 p-6 rounded-lg">
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li className="flex gap-2">
                <span className="text-lg dark:text-rose-600 text-orange-400">
                  •
                </span>
                <p className="mb-4">
                  Throughout my academic journey and early career, I&apos;ve
                  been actively working on various projects and with exceptional
                  teams, even managed to serve as a Microsoft Student Partner
                  and participate in and win several hackathons
                </p>
              </li>
              <li className="flex gap-2">
                <span className="text-lg dark:text-rose-600 text-orange-400">
                  •
                </span>
                <p className="mb-4">
                  In my free time, I&apos;ve been consistently engaging in
                  open-source and freelance web development projects, further
                  fueling my love for crafting exceptional web experiences and
                  expanding my practical knowledge.
                </p>
              </li>
              <li className="flex gap-2">
                <span className="text-lg dark:text-rose-600 text-orange-400">
                  •
                </span>
                <p className="mb-4">
                  These diverse experiences have honed my{" "}
                  <strong>
                    problem-solving, teamwork, adaptability, and ability to stay
                    updated with the latest technologies
                  </strong>
                  .
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-orange-400">Quick Facts</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-800 dark:text-gray-400">
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="flex items-center gap-3 mb-2">
              <PiBriefcaseLight className="w-7 h-7 dark:text-orange-400 text-rose-600" />
              <p>
                Owner of a drive to continuously build and deliver captivating
                and user-friendly web applications
              </p>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="flex items-center gap-3 mb-2">
              <PiGraduationCapLight className="w-5 h-5 dark:text-orange-400 text-rose-600" />
              <p>A Computer Science graduate</p>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="flex items-center gap-3 mb-2">
              <PiFileCodeLight className="w-6 h-6 dark:text-orange-400 text-rose-600" />
              <p>
                Love working with React, Node.js, and TypeScript as my go-to
                tech stack
              </p>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="flex items-center gap-3 mb-2">
              <PiHeartLight className="w-5 h-5 dark:text-orange-400 text-rose-600" />
              <p>
                Outside of IT: pianist, voracious reader, singer, and artist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-orange-400">
          Professional Journey
        </h2>
        <div className="space-y-8 text-gray-600 dark:text-gray-400">
          {/* Current Role */}
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-orange-400">
                Frontend Developer
              </h3>
              <p className="dark:text-gray-500">
                Freelance • March 2024 - Present
              </p>
            </div>
            <p className="mb-4">
              Develop and implement responsive, user-friendly interfaces using
              HTML, CSS, and JavaScript (ES6+), ensuring compatibility across
              devices and browsers. Build scalable React applications,
              implementing reusable components and state management solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                Next.js
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                Git&GitHub
              </span>
            </div>
          </div>

          {/* Previous Role */}
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-orange-400">
                React Developer
              </h3>
              <p className="dark:text-gray-500">
                Y_LAB · Internship • Aug 2024 - Oct 2024
              </p>
            </div>
            <p className="mb-4">
              Developed a fully functional e-commerce prototype with features
              including product listing, pagination, category filtering,
              shopping cart functionality, and product detail views.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                Redux
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                Figma
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                Git&GitHub
              </span>
            </div>
          </div>

          {/* Previous Role */}
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-orange-400">
                Jr. JavaScript Developer
              </h3>
              <p className="dark:text-gray-500">
                Open Source Projects & Freelance • Jul 2024 - Feb 2024
              </p>
            </div>
            <p className="mb-4">
              Developed responsive and interactive web components and pages
              using pure HTML, CSS, and modern JavaScript (ES6+), leveraging
              advanced layout techniques like CSS Grid, Flexbox, and frameworks
              such as Bootstrap and Tailwind CSS. Designed engaging animations
              and transitions to enhance user experience. Delivered over 170+
              website components inspired by major tech platforms, contributing
              to fully functional projects.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                Bootstrap
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                HTML
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                CSS
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                Git&GitHub
              </span>
            </div>
          </div>

          {/* Previous Role */}
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-orange-400">
                Frontend Web Developer Intern
              </h3>
              <p className="dark:text-gray-500">
                Itransition Group • Mar 2023 - Jun 2023
              </p>
            </div>
            <p className="mb-4">
              Created clean, semantic, and accessible HTML markup and styled web
              pages following best practices and web standards. Implemented
              responsive designs using CSS frameworks like Bootstrap and
              enhanced functionality with modern JavaScript (ES6+). Utilized
              Node.js for server-side development and integrated MongoDB for
              efficient data storage and retrieval. Actively managed version
              control and collaborative coding through Git and GitHub.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                HTML
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                CSS
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                Bootstrap
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                Git&GitHub
              </span>
            </div>
          </div>

          {/* Previous Role */}
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-orange-400">
                HTML/CSS Developer
              </h3>
              <p className="dark:text-gray-500">
                Scientific-Production Center MAX CJSC • Feb 2020 - Mar 2021
              </p>
            </div>
            <p className="mb-4">
              Crafted responsive web experiences using advanced HTML and CSS
              techniques, ensuring clean, semantic markup aligned with web
              standards and best practices. Engineered high-performance websites
              by optimizing HTML/CSS structure. Utilized Git and GitHub for
              efficient version control and collaborative development,
              contributing to seamless and scalable web solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                HTML
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                CSS
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                Git&GitHub
              </span>
            </div>
          </div>

          {/* Previous Role */}
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-orange-400">
                Microsoft Student Partner
              </h3>
              <p className="dark:text-gray-500">
                Microsoft • Apr 2019 - Dec 2019
              </p>
            </div>
            <p className="mb-4">
              Acquired proficiency in emerging technologies and programming
              languages through extensive self-learning, including
              documentation, tutorials, and online forums. Organized and led
              technical workshops and events on Microsoft technologies for
              peers. Achieved notable success by leading a team to victory in
              two hackathons, demonstrating rapid prototyping skills and
              innovative problem-solving.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                HTML
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                CSS
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                C#
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                C++
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                Team Leadership
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-orange-400">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "React.js/ Next.js",
            "JavaScript (ES6+)",
            "TypeScript",
            "Git/ GitHub/ GitLab",
            "MongoDB",
            "HTML5/ CSS3",
            "Node.js/ NPM/ PNPM",
            "Bootstrap v5/ Tailwind CSS",
          ].map((skill, index) => (
            <div
              key={index}
              className="text-gray-800 text-center bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600 dark:text-orange-400"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-orange-400">Languages</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-800">
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600 dark:text-orange-400">
            <div className="flex items-center gap-3">
              <IoLanguageOutline className="w-5 h-5" />
              <div>
                <p className="font-semibold">English</p>
                <p className="text-sm text-gray-400">C1 (fluent)</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600 dark:text-orange-400">
            <div className="flex items-center gap-3">
              <IoLanguageOutline className="w-5 h-5" />
              <div>
                <p className="font-semibold ">Russian</p>
                <p className="text-sm text-gray-400">Native</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600 dark:text-orange-400">
            <div className="flex items-center gap-3">
              <IoLanguageOutline className="w-5 h-5" />
              <div>
                <p className="font-semibold">Ukrainian</p>
                <p className="text-sm text-gray-400">Native</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-orange-400">
          Education & Certifications
        </h2>
        <div className="space-y-6">
          <div className="bg-white/5 p-6 rounded-lg text-gray-800 bg-white border-2 border-orange-300 dark:border-rose-600 dark:text-orange-400">
            <div className="flex items-start gap-3">
              <PiBookOpen className="w-5 h-5 mt-1" />
              <div>
                <h3 className="font-semibold">
                  Bachelor&apos;s degree - Computer Science
                </h3>
                <p className="text-gray-400">D. Mendeleev State University</p>
                <p className="text-sm text-gray-400">Sep 2017 - Jul 2021</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600 dark:text-orange-400">
            <div className="flex items-start gap-3">
              <PiBookOpen className="w-5 h-5 mt-1" />
              <div>
                <h3 className="font-semibold">React Developer Course</h3>
                <p className="text-gray-400">Scrimba</p>
                <p className="text-sm text-gray-400">Apr 2024 - Jun 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
