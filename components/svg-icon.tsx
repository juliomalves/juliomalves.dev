import * as React from 'react'

type SkillType =
    | 'brightscript'
    | 'css'
    | 'git'
    | 'html'
    | 'javascript'
    | 'nextjs'
    | 'nodejs'
    | 'react'
    | 'sass'
    | 'tailwindcss'
    | 'typescript'
type SocialType = 'github' | 'linkedin' | 'stackoverflow' | 'twitter'
type ThemeIconType = 'moon' | 'sun'

export type IconId = `icon-${SkillType | SocialType | ThemeIconType}`

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
