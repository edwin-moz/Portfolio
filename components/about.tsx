"use client"

import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"

export default function About() {
  const { ref } = useSectionInView("About", 0.5)

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm;mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a self-motivated person who enjoys coding, problem-solving, and
        collaborating with others. I have always been passionate about my work
        and my hobbies. My interest in technology and the use of excel and its
        functions is what led me to learn coding. With the desire to enhance my
        skills and the guidance from NSS, I am proud of the projects that I have
        completed.
      </p>
    </motion.section>
  )
}
