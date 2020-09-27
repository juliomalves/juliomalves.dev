import React from 'react'
import Link from 'next/link'
import NavItem from '@/components/nav-item'

import profileImg from '@/assets/images/profile-pic.jpg'

const Header = () => (
    <header className="sticky top-0 flex flex-row justify-between items-center w-full max-w-3xl mx-auto px-6 lg:px-0 py-4 lg:my-4 bg-white dark:bg-midnight">
        <Link href="/">
            <a className="flex flex-row items-center hover:opacity-80">
                <img alt="Julio Alves" className="w-12 md:w-16 h-auto rounded-full" src={profileImg} />
                <span className="pl-2 text-xl font-semibold">juliomalves.dev</span>
            </a>
        </Link>
        <nav className="flex flex-row hidden sm:block">
            <NavItem label="Home" href="/" key="home" />
            <NavItem label="Projects" href="#projects" key="projects" />
            <NavItem label="Contact" href="#contact" key="contact" />
        </nav>
    </header>
)

export default Header
