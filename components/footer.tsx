import React from 'react'

import TwitterLogo from '@/assets/svg/twitter-logo.svg'
import GithubLogo from '@/assets/svg/github-logo.svg'
import LinkedInLogo from '@/assets/svg/linkedin-logo.svg'

interface FooterLinkProps {
    children: React.ReactNode
    href: string
}

const FooterLink = ({ children, href }: FooterLinkProps) => (
    <a className="p-4 text-gray-800 hover:text-gray-400 dark:text-gray-500 dark-hover:text-gray-200" href={href}>
        {children}
    </a>
)

const Footer = () => (
    <footer className="flex flex-row justify-center items-center w-full max-w-3xl mx-auto px-6 lg:px-0 py-4 lg:my-4">
        <FooterLink href="https://www.twitter.com/juli0malves">
            <TwitterLogo />
        </FooterLink>
        <FooterLink href="https://www.github.com/juliomalves">
            <GithubLogo />
        </FooterLink>
        <FooterLink href="https://www.linkedin.com/in/juliomalves">
            <LinkedInLogo />
        </FooterLink>
    </footer>
)

export default Footer
