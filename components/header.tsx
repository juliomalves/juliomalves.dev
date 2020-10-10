import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
// import NavItem from '@/components/nav-item'

import profileImg from '@/assets/images/profile-pic.jpg'

const ThemeToggleButton = dynamic(() => import('@/components/theme-toggle-button'), {
    ssr: false
})

const Header = () => (
    <header className="sticky top-0 flex flex-row justify-between items-center w-full max-w-3xl mx-auto px-4 sm:px-8 py-4 bg-white dark:bg-midnight transition-bg-color duration-300 ease-in-out">
        <Link href="/">
            <a className="flex flex-row items-center">
                <img alt="Julio Alves" className="w-12 md:w-16 h-auto rounded-full" src={profileImg} />
                <span className="pl-3 text-xl font-medium">juliomalves.dev</span>
            </a>
        </Link>
        {/* <nav className="flex flex-row hidden md:block">
            <NavItem label="Home" href="/" key="home" />
            <NavItem label="Projects" href="/projects" key="projects" />
        </nav> */}
        <ThemeToggleButton />
    </header>
)

export default Header
