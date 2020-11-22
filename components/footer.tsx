import * as React from 'react'
import Link from '@/components/link'

import TwitterLogo from '@/assets/svg/twitter-logo.svg'
import GithubLogo from '@/assets/svg/github-logo.svg'
import LinkedInLogo from '@/assets/svg/linkedin-logo.svg'

interface FooterLinkProps {
    children: React.ReactNode
    href: string
    label: string
}

const FooterLisItem = ({ children, href, label }: FooterLinkProps) => (
    <li className="p-4">
        <Link href={href} className="text-gray-800 hover:text-neon-blue dark:text-gray-400 dark:hover:text-cerise" label={label} external>
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
                    <TwitterLogo />
                </FooterLisItem>
                <FooterLisItem href="https://www.github.com/juliomalves" label="GitHub">
                    <GithubLogo />
                </FooterLisItem>
                <FooterLisItem href="https://www.linkedin.com/in/juliomalves" label="LinkedIn">
                    <LinkedInLogo />
                </FooterLisItem>
            </ul>
            <p className="text-center text-sm">Julio Alves © {currentYear}</p>
        </footer>
    )
}

export default Footer
