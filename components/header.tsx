import React from 'react'
import Link from 'next/link'
// import NavItem from '@/components/nav-item'
import ThemeToggleButton from '@/components/theme-toggle-button'
import { useHasMounted } from '@/components/hooks/use-has-mounted'

import profileImg from '@/assets/images/profile-pic.jpg'

const Header = () => {
    const hasMounted = useHasMounted()

    return (
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
            {hasMounted ? <ThemeToggleButton /> : null}
        </header>
    )
}

export default Header
