import React from 'react'

import TwitterLogo from '@/assets/svg/twitter-logo.svg'
import GithubLogo from '@/assets/svg/github-logo.svg'
import LinkedInLogo from '@/assets/svg/linkedin-logo.svg'

interface FooterLinkProps {
    children: React.ReactNode
    href: string
}

const FooterLisItem = ({ children, href }: FooterLinkProps) => (
    <li className="p-4 text-gray-800 hover:text-gray-400 dark:text-gray-500 dark-hover:text-gray-200">
        <a href={href}>{children}</a>
    </li>
)

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="flex flex-col justify-center items-center w-full max-w-3xl mx-auto px-6 lg:px-0 py-4 lg:my-4">
            <ul className="flex items-center">
                <FooterLisItem href="https://www.twitter.com/juli0malves">
                    <TwitterLogo />
                </FooterLisItem>
                <FooterLisItem href="https://www.github.com/juliomalves">
                    <GithubLogo />
                </FooterLisItem>
                <FooterLisItem href="https://www.linkedin.com/in/juliomalves">
                    <LinkedInLogo />
                </FooterLisItem>
            </ul>
            <p className="text-center text-sm">Julio Alves © {currentYear}</p>
        </footer>
    )
}

export default Footer
