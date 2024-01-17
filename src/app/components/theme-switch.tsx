"use client"

import React, { useEffect } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type Theme = "light" | "dark"

export default function ThemeSwitch() {
    const [theme, setTheme ] = React.useState<Theme>("light")

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add('dark')
        } else {
            setTheme('light')
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove('dark')
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null

        if (localTheme) {
            setTheme(localTheme)
            
            if (localTheme === 'dark') {
                document.documentElement.classList.add('dark')
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark").matches) {
            setTheme('dark')
            document.documentElement.classList.add('dark')
        }
    }, [])

    return (
        <button className='fixed bottom-5 right-5 bg-white w-[2.5rem] h-[2.5rem] bg-opacity-80 
    backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full
    flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all
    dark:bg-gray-950 dark:text-white dark:bg-gradient-to-tr'
            onClick={toggleTheme}
        >
            {theme === 'light' ? <BsSun /> : <BsMoon />}
        </button>
    )
}