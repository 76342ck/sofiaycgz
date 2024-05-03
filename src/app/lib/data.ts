import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { CiDatabase } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";
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
    title: "Operations Manager - Alibaba",
    location: "Guangzhou, China",
    description:
      "Managed multiple e-commerce platforms while overseeing the maintenance and management of websites, mobile applications, and critical infrastructure essential for enabling online retail and wholesale transactions (both overseas and in Asia). Increased total market share of professional medical beauty equipment by 55% in total.",
    icon: React.createElement(AiOutlineStock),
    date: "2020 - 2023",
  },
  {
    title: "Barista - Mr. Wish",
    location: "Philadelphia, PA",
    description:
      "Worked part time making bubble tea while attending Temple University.",
    icon: React.createElement(CgWorkAlt),
    date: "2012 - 2019",
  },
  {
    title: "Assitant @ Getson & Schatz, P.C.",
    location: "Philadelphia, PA",
    description:
      "Worked as assitant in a law firm. Answered calls and data entry.",
    icon: React.createElement(CiDatabase),
    date: "2013",
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
