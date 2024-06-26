"use client"

import React, { useRef, useState } from 'react'
import { projectsData } from '../lib/data'
import Image from 'next/image'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'

type ProjectProps = typeof projectsData[number]

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])
    const transitionDuration = 0.5; // Increase transition duration for smoother animations

    const [enlarged, setEnlarged] = useState(false)

    const toggleEnlarged = () => {
        setEnlarged(!enlarged)
    }

    return (
        <motion.section 
        ref={ref} 
        style={{
            scale: scaleProgress,
            opacity: opacityProgress,
            transitionDuration: `${transitionDuration}s` // Apply transition duration
        }}
        className='bg-gray-100 max-w-[42rem] border rounded-lg
        border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]
        mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition'>
            <div className='pt-4 pb-7 px-5 sm:pl-10  sm:pr-2 sm:pt-10 sm:max-w-[50%] 
            flex flex-col h-full'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                    {tags.map((tag, index) => (
                        <li
                            className='bg-black/[0.7] px-3 py-2 text-[0.7rem] uppercase
                    tracking-wider text-white rounded-full'
                            key={index}>{tag}
                        </li>
                    ))}
                </ul>
            </div>

            <Image
                src={imageUrl}
                alt={title}
                quality={95}
                onClick={toggleEnlarged}
                className='absolute top-12 -right-40 w-[28.25rem]
                rounded-t-lg shadow-2xl transition hover:translate-x-3
                hover:translate-y-3 hover:rotate-2 hover:scale-[1.1]'
            />

            {enlarged && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={toggleEnlarged}
                    className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full"
                        style={{ maxWidth: "100vw", maxHeight: "100vh" }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
                        >
                            <Image src={imageUrl} alt={title} layout="fill" objectFit="contain" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </motion.section>
    )
}
