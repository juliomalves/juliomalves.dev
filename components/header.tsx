import * as React from 'react'
import Link from '@/components/link'
import dynamic from 'next/dynamic'

const ThemeToggleButton = dynamic(() => import('@/components/theme-toggle-button'), {
    ssr: false
})

const Header = () => {
    return (
        <header className="sticky top-0 flex flex-row justify-between items-center w-full max-w-3xl mx-auto px-4 tablet:px-8 py-4 bg-white dark:bg-midnight">
            <Link href="/" className="flex flex-row items-center focus-outline" label="juliomalves.dev">
                <img
                    alt="Julio Alves"
                    className="w-12 h-auto border-2 border-neon-blue dark:border-green rounded-full"
                    src="/images/profile-pic.jpg"
                    width="48"
                    height="48"
                />
                <span className="pl-3 text-neon-blue dark:text-green text-xl font-semibold">juliomalves.dev</span>
            </Link>
            <ThemeToggleButton />
        </header>
    )
}

export default Header
