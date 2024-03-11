import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { LuFileSpreadsheet } from "react-icons/lu"
import { MdForklift } from "react-icons/md"
import { LuGraduationCap } from "react-icons/lu"
import rmtdevImg from "@/public/rmtdev.png"
import storedash from "@/public/storedash.png"
import wordanalyticsImg from "@/public/wordanalytics.png"
import educationconnect from "@/public/educationconnect.png"
import smileyscounter from "@/public/smileyscounter.png"
import smileystrackbag from "@/public/smileystrackbag.png"
import corpcomment from "@/public/corpcomment.png"

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
] as const

export const experiencesData = [
  {
    title: "Nashville Software School",
    location: "Remote",
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
  },
] as const

export const projectsData = [
  {
    description:
      "The app aims to illustrate the relationship between stores and distributors, emphasizing the ordering process and using a modern ordering system.",
    imageUrl: storedash,
    link: "",
    tags: ["React", "C#", ".NET", "Tailwind", "PostgreSQL"],
    title: "Store Dash",
  },
  {
    description: "A simple counter app that counts from 1 - 50.",
    imageUrl: smileyscounter,
    link: "https://smileys-counter.vercel.app/",
    tags: ["React", "Vite", "HTML", "CSS"],
    title: "Smiley's Counter",
  },
  {
    description:
      "An application to keep track of our travel items. This application uses our browser's local storage to keep track of our items!",
    imageUrl: smileystrackbag,
    link: "https://smileys-trackbag.vercel.app/",
    tags: ["React", "Vite", "HTML", "CSS"],
    title: "Smiley's Trackbag",
  },
  {
    description:
      "This application allows the user to post comments about a company to a public API.",
    imageUrl: corpcomment,
    link: "https://smileys-corp-comment.vercel.app/",
    tags: ["React", "Vite", "HTML", "CSS"],
    title: "Smiley's CorpComment",
  },
  {
    description:
      "A simple web application for quick analytics on text. It shows word count, character count and social media post limits.",
    imageUrl: wordanalyticsImg,
    link: "https://smileys-word-analytics.vercel.app/",
    tags: ["React", "Vite", "HTML", "CSS"],
    title: "Smiley's WordAnalytics",
  },
  {
    description:
      "After 3 months at NSS I was able to complete my first project. This app helps homeschool parents keep track of assignments.",
    imageUrl: educationconnect,
    link: "",
    tags: ["Javascript", "HTML", "Tailwind", "React", "json"],
    title: "Education Connect",
  },
] as const

export const skillsData = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "JSON",
  "SQLite",
  "TypeScript",
  "TailwindCSS",
  "Framer Motion",
  "Next.js",
  "Vite",
  "C#",
  ".NET",
  "PostgreSQL",
  "Git",
  "Github",
  "Postman",
] as const
