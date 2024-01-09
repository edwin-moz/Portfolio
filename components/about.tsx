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
                Before embarking on my coding journey at NSS, I served as a supervisor at a warehouse distribution. During my time there, I discovered my passion for leveraging technology to enhance efficiency. I often found myself assisting colleagues and employees by creating functions in Google Sheets, which sparked my interest in coding.
                Motivated by this passion and the desire to enhance my skills, I took a leap of faith and joined NSS. Since then, my coding abilities, teamwork, and patience have significantly improved, all thanks to the immersive learning experience at NSS.
            </p>
        </motion.section>
    )
}