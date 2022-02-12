import * as React from 'react'

type IconId =
    | 'icon-brightscript'
    | 'icon-css'
    | 'icon-git'
    | 'icon-github'
    | 'icon-html'
    | 'icon-javascript'
    | 'icon-linkedin'
    | 'icon-moon'
    | 'icon-nextjs'
    | 'icon-nodejs'
    | 'icon-react'
    | 'icon-sass'
    | 'icon-sun'
    | 'icon-stackoverflow'
    | 'icon-tailwindcss'
    | 'icon-twitter'
    | 'icon-typescript'

interface ISvgIcon {
    className?: string
    color?: string
    id: IconId
    hidden?: boolean
    noFill?: boolean
    title?: string
}

const SvgIcon = ({ className, color = 'currentColor', id, hidden = false, noFill = false, title }: ISvgIcon) => {
    const fill = noFill ? 'none' : color
    const classNames = `inline-block${className ? ` ${className}` : ''}`

    return (
        <svg className={classNames} fill={fill} role="img" aria-hidden={hidden}>
            {title && <title>{title}</title>}
            <use href={`/sprite.svg#${id}`} />
        </svg>
    )
}

export default SvgIcon
