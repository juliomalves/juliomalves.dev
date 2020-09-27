import React from 'react'

import TwitterLogo from '@/assets/svg/twitter.svg'
import GithubLogo from '@/assets/svg/github.svg'
import LinkedInLogo from '@/assets/svg/linkedin.svg'

const Footer = () => (
    <footer className="flex flex-row justify-center items-center w-full max-w-3xl mx-auto px-6 lg:px-0 py-4 lg:my-4">
        <a className="p-4 text-gray-800 dark:text-gray-500 hover:text-gray-300" href="https://www.twitter.com/juli0malves">
            <TwitterLogo />
        </a>
        <a className="p-4 text-gray-800 dark:text-gray-500 hover:text-gray-300" href="https://www.github.com/juliomalves">
            <GithubLogo />
        </a>
        <a className="p-4 text-gray-800 dark:text-gray-500 hover:text-gray-300" href="https://www.linkedin.com/in/juliomalves">
            <LinkedInLogo />
        </a>
    </footer>
)

export default Footer
