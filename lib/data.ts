import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { LuFileSpreadsheet } from "react-icons/lu"
import { MdForklift } from "react-icons/md"
import { LuGraduationCap } from "react-icons/lu"
import rmtdevImg from "@/public/rmtdev.png"
import wordanalyticsImg from "@/public/wordanalytics.png"
import educationconnect from "@/public/educationconnect.png"

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
    title: "Nashville Software School",
    location: "Nashville, TN (Remote)",
    description:
      "Intensive full-time software development bootcamp focusing on full stack development fundamentals and problem solving. The final half of the program is executed in a simulated company environment with Scrum methodology.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
  {
    title: "Operations Supervisor II",
    location: "Goodlettsville, TN",
    description:
      "Led the perishable outbound department, overseeing a team of selectors, forklift operators, loaders, sanitation crew, and entry-level supervisors.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2023",
  },
  {
    title: "Operations Supervisor I",
    location: "Goodlettsville, TN",
    description:
      "Effectively supervised a team of outbound loaders, ensuring the precise loading of trucks while consistently meeting the company's stringent safety and production standards.",
    icon: React.createElement(LuFileSpreadsheet),
    date: "2015 - 2018",
  },
  {
    title: "Warehouse Selector",
    location: "Goodlettsville, TN",
    description:
      "Proficiently operated heavy warehouse equipment, ensuring strict adherence to company production standards.",
    icon: React.createElement(MdForklift),
    date: "2010 - 2015",
  }
] as const;

export const projectsData = [
  {
    title: "Education Connect",
    description:
      "After 3 months at NSS I was able to comeplete my first project. This app helps homeschool parents keep track of assignments.",
    tags: ["Javascript", "HTML", "Tailwind", "React", "json"],
    imageUrl: educationconnect,
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "JSON server",
  "SQLite",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "Next.js",
  "C#",
  ".NET",
  "PostgreSQL",
  "RESTful APIs",
  "Git",
  "Postman"
] as const;