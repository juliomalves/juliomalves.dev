import * as React from 'react'
import Link from '@/components/link'
import SvgIcon from '@/components/svg-icon'

interface FooterLinkProps {
    href: string
    label: string
}

const FooterLisItem = ({ children, href, label }: React.PropsWithChildren<FooterLinkProps>) => (
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
    const currentYear = new Date().getUTCFullYear()

    return (
        <footer className="flex flex-col justify-center items-center w-full max-w-3xl mx-auto p-4">
            <ul className="flex items-center">
                <FooterLisItem href="https://www.twitter.com/juli0malves" label="Twitter">
                    <SvgIcon className="w-8 h-8" id="icon-twitter" title="Twitter logo" />
                </FooterLisItem>
                <FooterLisItem href="https://www.github.com/juliomalves" label="GitHub">
                    <SvgIcon className="w-8 h-8" id="icon-github" title="GitHub logo" />
                </FooterLisItem>
                <FooterLisItem href="https://www.stackoverflow.com/users/1870780/juliomalves" label="Stack Overflow">
                    <SvgIcon className="w-8 h-8" id="icon-stackoverflow" title="Stack Overflow logo" />
                </FooterLisItem>
                <FooterLisItem href="https://www.linkedin.com/in/juliomalves" label="LinkedIn">
                    <SvgIcon className="w-8 h-8" id="icon-linkedin" title="LinkedIn logo" />
                </FooterLisItem>
            </ul>
            <p className="text-center text-sm">Julio Alves © {currentYear}</p>
        </footer>
    )
}

export default Footer
