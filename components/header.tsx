import * as React from 'react'
import Link from '@/components/link'
import ThemeToggleButton from '@/components/theme-toggle-button'
import { useHasMounted } from '@/components/hooks/use-has-mounted'

import profileImg from '@/assets/images/profile-pic.jpg'

const Header = () => {
    const hasMounted = useHasMounted()

    return (
        <header className="sticky top-0 flex flex-row justify-between items-center w-full max-w-3xl mx-auto px-4 tablet:px-8 py-4 bg-white dark:bg-midnight">
            <Link href="/" className="flex flex-row items-center focus-outline" label="juliomalves.dev">
                <img
                    alt="Julio Alves"
                    className="w-12 h-auto border-2 border-neon-blue dark:border-green rounded-full"
                    src={profileImg}
                    width="48"
                    height="48"
                />
                <span className="pl-3 text-neon-blue dark:text-green text-xl font-semibold">juliomalves.dev</span>
            </Link>
            {hasMounted && <ThemeToggleButton />}
        </header>
    )
}

export default Header
