"use client";

import React from "react";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    name: "My Fav Videos",
    description:
      "A dynamic video grid application, featuring a responsive layout, interactive components, and seamless integration of favorite channels and video details for an engaging user experience.",
    technologies: ["React", "Tailwind", "Next.js"],
    githubLink: "https://github.com/evokss/MyFavVideos",
    deployLink: "",
    imageUrl: "/icons/movie.png",
  },
  {
    id: 2,
    name: "Meme Factory",
    description:
      "Generates random meme images from a preloaded dataset, and view the resulting meme on the screen. The app dynamically updates the displayed meme with each click, providing an interactive experience.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
    githubLink: "https://github.com/evokss/MemeFactory",
    deployLink: "",
    imageUrl: "/icons/troll-face.png",
  },
  {
    id: 3,
    name: "Classic Rock Paper Scissors",
    description:
      "The game dynamically updates the interface with real-time results, tracks player scores persistently using localStorage, and employs logic to simulate computer moves and outcomes.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/evokss/MyRockPaperScissors",
    deployLink: "",
    imageUrl: "/icons/rock-paper-scissors.png",
  },
  {
    id: 4,
    name: "YouTube Clone",
    description:
      "The project replicates the core design of YouTube's interface, featuring a structured video grid, navigation bar, and user-friendly design elements, all built without the use of JavaScript.",
    technologies: ["Bootstrap", "HTML", "CSS"],
    githubLink: "https://github.com/evokss/MyRockPaperScissors",
    deployLink: "https://evokss.github.io/MyYouTubeClone.github.io/",
    imageUrl: "/icons/youtube.png",
  },
  {
    id: 5,
    name: "Airbnb Clone",
    description:
      "This project display online experiences with badges for availability and location. It leverages props, mapping techniques, and conditional rendering to create a reusable and scalable codebase.",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    githubLink:
      "https://github.com/evokss/ReactProjects/tree/main/airbnb-clone",
    deployLink: "",
    imageUrl: "/icons/airbnb.png",
  },
  {
    id: 6,
    name: "React Fun Facts",
    description:
      "The game dynamically updates the interface with real-time results, tracks player scores persistently using localStorage, and employs logic to simulate computer moves and outcomes.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    githubLink:
      "https://github.com/evokss/ReactProjects/tree/main/react-info-page",
    deployLink: "https://react-info-page-evas-projects.netlify.app/",
    imageUrl: "/icons/react.png",
  },
];

// ProjectCard Component
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-orange-300 hover:bg-orange-50 dark:hover:border-rose-600 dark:bg-gray-900 dark:hover:bg-gray-900  dark:text-white border-2 border-orange-400 group">
      <div className="flex justify-center pb-6">
        <img src={project.imageUrl} alt={project.name} className="h-28" />
      </div>
      <h3 className="text-xl font-bold text-orange-400 mb-2">{project.name}</h3>
      <p className="text-gray-600 mb-4 dark:group-hover:text-gray-400 transition-colors duration-300">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-orange-400 text-xs font-medium px-2.5 py-0.5 rounded dark:text-rose-600"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-4">
        <Link
          href={project.githubLink}
          target="_blank"
          className="flex items-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 hover:text-orange-400 transition-colors"
        >
          <FiGithub className="mr-2 w-5 h-5" /> GitHub
        </Link>
        <Link
          href={project.deployLink}
          target="_blank"
          className="flex items-center bg-orange-400 hover:bg-orange-300 text-white px-4 py-2 rounded dark:bg-rose-600 dark:hover:bg-rose-500 transition-colors"
        >
          <FiExternalLink className="mr-2 w-5 h-5" /> Live Demo
        </Link>
      </div>
    </div>
  );
};

// Main Projects Showcase Page
const ProjectsShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl text-orange-400 mb-6">
            Welcome to My Project Gallery
          </h1>

          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Here you'll find a collection of personal projects born from
            curiosity and creativity. While my professional work showcases
            technical expertise, these projects represent my experimental side -
            where I tackle unique challenges and explore technologies just for
            the joy of building. Each one tells a story of growth and
            innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
