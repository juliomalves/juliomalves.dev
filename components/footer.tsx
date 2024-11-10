import Link from '@/components/link'
import SvgIcon from '@/components/svg-icon'
import type { IconId } from '@/components/svg-icon'

interface FooterLinkProps {
    href: string
    label: string
    iconId: IconId
    iconTitle: string
}

const FooterLisItem = ({ href, label, iconId, iconTitle }: FooterLinkProps) => (
    <li className="p-4">
        <Link
            href={href}
            className="flex text-gray-800 focus-outline hover:text-neon-blue dark:text-gray-400 dark:hover:text-green"
            label={label}
            external
        >
            <SvgIcon className="w-8 h-8" id={iconId} title={iconTitle} />
        </Link>
    </li>
)

const Footer = () => {
    const currentYear = new Date().getUTCFullYear()

    return (
        <footer className="flex flex-col justify-center items-center w-full max-w-3xl mx-auto p-4">
            <ul className="flex items-center">
                <FooterLisItem href="https://www.twitter.com/juli0malves" label="Twitter" iconId="icon-twitter" iconTitle="Twitter logo" />
                <FooterLisItem href="https://www.github.com/juliomalves" label="GitHub" iconId="icon-github" iconTitle="GitHub logo" />
                <FooterLisItem
                    href="https://www.stackoverflow.com/users/1870780/juliomalves"
                    label="Stack Overflow"
                    iconId="icon-stackoverflow"
                    iconTitle="Stack Overflow logo"
                />
                <FooterLisItem
                    href="https://www.linkedin.com/in/juliomalves"
                    label="LinkedIn"
                    iconId="icon-linkedin"
                    iconTitle="LinkedIn logo"
                />
            </ul>
            <p className="text-center text-sm">Julio Alves © {currentYear}</p>
        </footer>
    )
}

export default Footer
