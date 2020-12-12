import * as React from 'react'
import Link from '@/components/link'
import SvgIcon, { githubIcon, linkedinIcon, twitterIcon } from '@/components/svg-icon'

interface FooterLinkProps {
    children: React.ReactNode
    href: string
    label: string
}

const FooterLisItem = ({ children, href, label }: FooterLinkProps) => (
    <li className="p-4">
        <Link
            href={href}
            className="flex text-gray-800 focus-outline hover:text-neon-blue dark:text-gray-400 dark:hover:text-green"
            label={label}
            external
        >
            {children}
        </Link>
    </li>
)

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="flex flex-col justify-center items-center w-full max-w-3xl mx-auto px-6 lg:px-0 py-4 lg:my-4">
            <ul className="flex items-center">
                <FooterLisItem href="https://www.twitter.com/juli0malves" label="Twitter">
                    <SvgIcon className="w-8 h-8" d={twitterIcon} viewBox="0 0 32 32" />
                </FooterLisItem>
                <FooterLisItem href="https://www.github.com/juliomalves" label="GitHub">
                    <SvgIcon className="w-8 h-8" d={githubIcon} viewBox="0 0 32 32" />
                </FooterLisItem>
                <FooterLisItem href="https://www.linkedin.com/in/juliomalves" label="LinkedIn">
                    <SvgIcon className="w-8 h-8" d={linkedinIcon} viewBox="0 0 32 32" />
                </FooterLisItem>
            </ul>
            <p className="text-center text-sm">Julio Alves © {currentYear}</p>
        </footer>
    )
}

export default Footer
