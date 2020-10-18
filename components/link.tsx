import React, { ReactNode } from 'react'
import NextLink from 'next/link'

interface LinkProps {
    children: ReactNode
    className?: string
    external?: boolean
    href: string
    label?: string
}

const Link = ({ children, className, external = false, href, label }: LinkProps) => {
    if (external) {
        return (
            <a href={href} className={className} aria-label={label} rel="noopener noreferrer" target="_blank">
                {children}
            </a>
        )
    }

    return (
        <NextLink href={href}>
            <a className={className} aria-label={label}>
                {children}
            </a>
        </NextLink>
    )
}

export default Link
