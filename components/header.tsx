import React from 'react'
import Link from 'next/link'
import NavItem from '@/components/nav-item'

import profileImg from '@/assets/images/profile-pic.jpg'

const navContent = ['Home', 'Projects', 'Contact']

const Header = () => {
    const navItems = navContent.map((item: string) => {
        const itemId = item.toLowerCase()
        return <NavItem label={item} href={`#${itemId}`} key={itemId} />
    })

    return (
        <header className="sticky top-0 flex flex-row justify-between items-center w-full max-w-3xl mx-auto my-4 p-4 bg-white text-black">
            <Link href="">
                <a className="hover:opacity-80">
                    <img alt="Julio Alves profile image" className="w-24 h-auto rounded-full" src={profileImg} />
                </a>
            </Link>
            <nav className="flex flex-row">{navItems}</nav>
        </header>
    )
}

export default Header
