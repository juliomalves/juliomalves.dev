import NextLink from 'next/link'

interface LinkProps {
    className?: string
    external?: boolean
    href: string
    label?: string
}

const Link = ({ children, className, external = false, href, label }: React.PropsWithChildren<LinkProps>) => {
    if (external) {
        return (
            <a href={href} className={className} aria-label={label} rel="noopener noreferrer" target="_blank">
                {children}
                <span className="sr-only"> (opens a new window)</span>
            </a>
        )
    }

    return (
        <NextLink href={href} className={className} aria-label={label}>
            {children}
        </NextLink>
    )
}

export default Link
