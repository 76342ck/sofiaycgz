import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import subImg from "/public/subreefofficial.png"
import ssnImg from "/public/SSNWorkflow.png";
import connect4Img from "/public/Connect4.jpeg";
import petshopImg from "/public/petshop.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Subreef Official",
    description:
      "Developed and crafted a website tailored for Subreef, an online e-commerce store.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: subImg,
  },
  {
    title: "SSN Workflow System",
    description:
      "Web form application to facilitaty International students from Temple University getting a social security number.",
    tags: ["ASP.NET", "C#", "CSS", "Bootstrap", "JQuery", "SQL", "DBMS"],
    imageUrl: ssnImg,
  },
  {
    title: "Connect 4",
    description:
      "A straightforward two-player drag-and-drop game designed to emulate the classic Connect 4 experience, utilizing the dragNdrop JS plugin for seamless interaction.",
    tags: ["HTML", "CSS", "JavaScript", "dragNdrop JS"],
    imageUrl: connect4Img,
  },
  {
    title: "Amazon Pet Shop",
    description:
      "Web application consisting of a Web application (ASPX pages) & Web APIs to simulate a shopping experience like Amazon.",
    tags: ["ASP.NET", "CSS", "Bootstrap", "Web API", "DBMS"],
    imageUrl: petshopImg,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "ASP.NET",
  "C#",
  "Java",
  "SQL",
  "Github Pages",
  "Python",
  "Django",
  "Framer Motion",
  "Web API",
  "Angular",
  "DBMS",
] as const;