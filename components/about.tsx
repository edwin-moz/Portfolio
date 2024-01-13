"use client"

import SectionHeading from "./section-heading";
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks";

export default function About() {

    const { ref } = useSectionInView('About', 0.5)

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm;mb-40 scroll-mt-28" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} id="about">
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                Before embarking on my journey into coding and programming, I held a supervisory position in a distribution warehouse. Working with the large volume of inventory, logistics, schedules, and day-to-day operations of a distribution center, I always appreciated the technology that allowed me to increase efficiency. While assisting colleagues and employees in managing our systems and processes, I found that my appreciation for the technology we used every day grew into a passionate interest. It was this passion that took me from creating more efficient Excel and Google Sheets to amateur coding endeavors. The satisfaction and enjoyment I felt after completing my first project guided me to a precipice where I chose to take a leap of faith into a new career path. That leap was rewarded by the knowledge and skill I have gained since joining the NSS program. Since then, with teamwork, diligence, and a healthy dose of patience, NSS has helped me significantly improve my skill set and set me on a path I am excited to walk.
            </p>
        </motion.section>
    )
}