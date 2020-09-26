import React from 'react'
import Link from 'next/link'

interface NavItemProps {
    label: string
    href: string
}

const NavItem = ({ label, href }: NavItemProps) => (
    <Link href={href}>
        <a className="p-4 rounded transition-all duration-200 hover:bg-gray-200">{label}</a>
    </Link>
)

export default NavItem
