"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '../lib/hooks'

export default function About() {
    const { ref } = useSectionInView('About')

    return (
        <motion.section
            ref={ref}
            className='mb-28 max-w-[45rem] text-center loading-8 sm:mb-40 scroll-mt-28 text-sm'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3'>
                With a degree in <span className='font-medium'>Information Technology</span>,
                I have transformed my passion for programming into a lifelong pursuit.
                My coding journey began during the era of {"  "}
                <span className='font-medium'>Xanga</span> and {"  "}
                <span className='font-medium'>Myspace</span>,
                and since then, I have marveled at the creative power of coding to
                craft visually appealing websites. From the early days of experimenting
                with Bootstrap to diving into the intricacies of {"  "}
                <span className='font-medium'>React.js</span>, {"  "}
                <span className='font-medium'>Node.js</span>, {"  "}
                and <span className='font-medium'>CSS</span>, {"  "}
                I have honed my skills in bringing ideas to life through technology.
                <br /><br />
                Constantly embracing innovation, I thrive on learning new technologies
                and techniques to elevate creative platforms.
            </p>
            <p>
                <span className='italic'>Beyond the screen</span>,
                I find joy in playing mobile games, immersing myself
                in fiction novels, and exploring the latest trends online. Committed to
                broadening my skill set, I am currently delving into the realm of animation
                and transitions while expanding my linguistic horizons through Duolingo. Coding is not just
                a career for me—it is a lifestyle that fuels my curiosity and commitment
                to staying at the forefront of technological evolution.
                
            </p>
        </motion.section>
    )
}
