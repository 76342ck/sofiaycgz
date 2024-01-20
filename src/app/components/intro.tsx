"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '../lib/hooks'
import { useActiveSectionContext } from '../context/active-section-context'

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5)
    const {
        setActiveSection,
        setTimeOfLastClick,
    } = useActiveSectionContext()

    return (
        <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
            <div className='flex items-center justify-center pt-20 mb-24'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "just",
                            duration: 0.8,
                            delay: 0.1,
                            //ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <Image
                            src="https://i.imgur.com/Gg2TdNd.png"
                            alt='Peach Portrait'
                            width="200"
                            height="200"
                            quality="95"
                            priority={true}
                            className='h-24 w-24 rounded-full object-cover 
                            border-[0.35rem] border-white shadow-xl
                            '
                        />
                    </motion.div>


                    <motion.span className='absolute bottom-0 right-0 text-3xl'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >🍑</motion.span>
                </div>
            </div>

            <p className='typing-demo mt-12 px-4'>
            <span className='text-[1.35rem] font-bold'>Hello I am Sofia.</span> 
            </p>
            <motion.p className='mb-10 px-4 text-[.89rem]'
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.6,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                I am a graduate with a Bachelor&apos;s Degree in 
                <span className='font-bold'> Information Science & Technology</span> at
                <span className='font-bold'> Temple University</span>. 
                <br></br>I enjoy building responsive{"  "}
                <span className='italic'>websites & applications</span>. My focus is {"  "}
                <span className='underline'>React (Next.js)</span>. <br></br> I am fluent in 
                <span className='italic'> English, Spanish, & Chinese (Mandarin)</span>.
            </motion.p>

            <motion.div className='flex flex-col sm:flex-row items-center 
            justify-center gap-2 px-4 text-xs'
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: -25}}
                transition={{
                    delay: 0.8,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <Link href="#contact"
                    className='group bg-gray-900 text-white px-6
                    py-3 flex items-center gap-2 rounded-full
                    outline-none focus-scale-105 hover:scale-105
                    hover:bg-gray-950 dark:hover:text-[#fbe2e3] 
                    active:scale-100 transition cursor-cell'
                    onClick={() => {
                        setActiveSection("Contact")
                        setTimeOfLastClick(Date.now())
                    }}
                >
                    Contact me here
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>
                <a className='bg-white px-6 py-3 flex items-center 
                gap-2 rounded-full outline-none focus-scale-105 hover:scale-105
                hover:bg-gray-950 hover:text-white dark:hover:text-[#fbe2e3] 
                active:scale-100 transition cursor-cell' href="/resume_SC24.pdf" download>
                    Resume
                    <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
                </a>
                <a className='bg-white p-4 text-gray-700 flex items-center 
                gap-2 rounded-full outline-none focus-scale-105 hover:scale-105
                hover:bg-gray-950 dark:hover:text-[#fbe2e3] hover:text-white
                active:scale-100 transition cursor-cell' 
                href='https://www.linkedin.com/in/sofiaycgz/' target='_blank'>
                    <BsLinkedin />
                </a>
                <a className='bg-white p-4 text-gray-700 flex items-center 
                gap-2 text-[0.9rem] rounded-full outline-none focus-scale-105 hover:scale-105
                hover:bg-gray-950 dark:hover:text-[#fbe2e3] hover:text-white
                active:scale-100 transition cursor-cell'
                href='https://github.com/76342ck' target='_blank'>
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}
