import React from 'react'
import Link from 'next/link'

interface NavItemProps {
    label: string
    href: string
}

const NavItem = ({ label, href }: NavItemProps) => (
    <Link href={href}>
        <a className="p-1 md:p-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800">{label}</a>
    </Link>
)

export default NavItem
