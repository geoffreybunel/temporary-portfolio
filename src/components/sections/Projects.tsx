"use client";
import React from "react";
import { FadeIn } from "../ui";
import Image from "next/image";
import ButterflyIcon from "../icons/ButterflyIcon";
import DiamondIcon from "../icons/DiamondIcon";
import FlowerIcon from "../icons/FlowerIcon";
import SparkleIcon from "../icons/SparkleIcon";
import StarIcon from "../icons/StarIcon";
import GithubIcon from "../icons/GithubIcon";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techStack,
  githubUrl,
  delay = 0,
}) => (
  <FadeIn delay={delay} className="w-full max-w-lg mx-auto">
    <div className="space-y-6 border border-zinc-200/60 shadow-sm rounded-xl md:rounded-2xl p-4">
      <div className="border border-zinc-200/60 overflow-hidden rounded-lg md:rounded-xl bg-gray-100">
        <Image
          src={image}
          alt={title}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="space-y-2">
        <h3 className="text-zinc-900 text-base md:text-lg font-semibold leading-tight">
          {title}
        </h3>
        <p className="text-zinc-600 text-base leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="flex justify-between">
          <div className="flex flex-wrap gap-1.5 pt-1">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-zinc-100 border border-zinc-200/30 text-zinc-600 text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 text-zinc-600 hover:text-zinc-900 transition"
          >
            <GithubIcon />
            <span className="hover:underline">Code</span>
          </a>
        </div>
        
      </div>
    </div>
  </FadeIn>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "HRNet",
      description:
        "HRNet is a human resources management application originally built with jQuery. The goal of this project was to modernize the application by migrating it to React in order to improve performance, maintainability, and developer experience. During the migration, the original jQuery modal plugin used in the application was replaced with a custom React component. This component was designed to be reusable and easily customizable, allowing developers to apply their own styles without the limitations of the original plugin. This project highlights the challenges of migrating legacy code to modern frameworks while improving application architecture and performance.",
      image: "/hrnet.png",
      techStack: ["React", "Vite", "JavaScript (ES6+)", "CSS"],
      githubUrl: "https://github.com/geoffreybunel/HRNet",
    },
    {
      title: "ArgentBank",
      description:
        "ArgentBank is a banking web application that allows users to authenticate and manage their bank accounts through a REST API. The application provides a dashboard where users can view their account information and transactions. It demonstrates how to manage global application state and interact with backend services in a React application. This project focuses on building a scalable front-end architecture with authentication flows and API communication.",
      image: "/argentbank.png",
      techStack: ["React", "Redux", "JavaScript (ES6+)", "REST API", "CSS"],
      githubUrl: "https://github.com/geoffreybunel/Argent-Bank",
    },
    {
      title: "SportSee",
      description:
        "SportSee is a sports analytics dashboard that visualizes athlete performance data. The application displays different performance metrics through interactive charts and graphs. It demonstrates how to transform and structure raw data to make it meaningful and understandable for users. This project focuses on building reusable components and integrating data visualization libraries within a React application.",
      image: "/sportsee.png",
      techStack: ["React", "Recharts", "JavaScript (ES6+)", "CSS"],
      githubUrl: "https://github.com/geoffreybunel/sportsee",
    },
    {
      title: "Les Petits Plats",
      description:
        "Les Petits Plats is a recipe search application designed to handle complex filtering and searching within a large dataset of recipes. The main challenge of this project was to design an efficient search algorithm capable of dynamically filtering recipes based on multiple criteria such as ingredients, appliances, and utensils. Different approaches were explored to optimize search performance and manage large collections of data efficiently.",
      image: "/les-petits-plats.png",
      techStack: ["JavaScript (ES6+)", "HTML", "CSS"],
      githubUrl: "https://github.com/geoffreybunel/les-petits-plats",
    },
    {
      title: "FishEye",
      description:
        "FishEye is a platform designed to showcase photographers and their work through an accessible web interface. The project focuses on implementing accessibility best practices to ensure that the application can be used by all users, including those relying on assistive technologies. Key features include keyboard navigation, an accessible media lightbox, and semantic HTML structures to improve screen reader compatibility.",
      image: "/fisheye.png",
      techStack: ["JavaScript (ES6+)", "HTML", "CSS", "Accessibility (ARIA, keyboard navigation)"],
      githubUrl: "https://github.com/geoffreybunel/Front-End-Fisheye",
    },
  ];

  const DecorativeIcons: React.FC = () => {
    const icons = [
      ButterflyIcon,
      DiamondIcon,
      FlowerIcon,
      SparkleIcon,
      StarIcon,
    ];

    // Duplicate icons for seamless scroll
    const duplicatedIcons = [...icons, ...icons];

    return (
      <div className="mb-8 overflow-hidden relative max-w-[250px] mx-auto">
        <style jsx>{`
          @keyframes iconScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-icon-scroll {
            animation: iconScroll 8s linear infinite;
          }
          .animate-icon-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="flex items-center gap-4 animate-icon-scroll">
          <div className="w-1 h-1 bg-zinc-300 rounded-full flex-shrink-0" />
          {duplicatedIcons.map((IconComponent, index) => (
            <React.Fragment key={`icon-${index}`}>
              <div className="flex-shrink-0">
                <IconComponent />
              </div>
              {index < duplicatedIcons.length - 1 && (
                <div className="w-1 h-1 bg-zinc-300 rounded-full flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
          <div className="w-1 h-1 bg-zinc-300 rounded-full flex-shrink-0" />
        </div>
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    );
  };

  return (
    <section>
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-4 space-y-4">
          <FadeIn>
            <FadeIn delay={0.2}>
              <DecorativeIcons />
            </FadeIn>
            <FadeIn delay={0.4}>
              <h2 className="text-zinc-900 text-xl md:text-2xl font-semibold leading-relaxed mb-8">
                Recent Projects & Work
              </h2>
            </FadeIn>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 mx-auto">
          {projects.map((project, index) => (
            <FadeIn delay={0.6 + index * 0.15} key={project.title}>
              <ProjectCard key={project.title} {...project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects };
