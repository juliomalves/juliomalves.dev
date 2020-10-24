import React from 'react'

import CSS3Logo from '@/assets/svg/css3-logo.svg'
import GitLogo from '@/assets/svg/git-logo.svg'
import HTML5Logo from '@/assets/svg/html5-logo.svg'
import JavaScriptLogo from '@/assets/svg/javascript-logo.svg'
import NextJSLogo from '@/assets/svg/nextjs-logo.svg'
import NodeJSLogo from '@/assets/svg/nodejs-logo.svg'
import ReactLogo from '@/assets/svg/react-logo.svg'
import RokuLogo from '@/assets/svg/roku-logo.svg'
import SassLogo from '@/assets/svg/sass-logo.svg'
import TypeScriptLogo from '@/assets/svg/typescript-logo.svg'

interface SkillListItemProps {
    label: string
    Icon: string
}

const SkillListItem = ({ label, Icon }: SkillListItemProps) => (
    <li className="flex flex-col items-center my-4">
        <Icon />
        <p className="my-2">{label}</p>
    </li>
)

const SkillList = () => (
    <ul className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-5">
        <SkillListItem label="JavaScript" Icon={JavaScriptLogo} />
        <SkillListItem label="TypeScript" Icon={TypeScriptLogo} />
        <SkillListItem label="React.js" Icon={ReactLogo} />
        <SkillListItem label="Next.js" Icon={NextJSLogo} />
        <SkillListItem label="Node.js" Icon={NodeJSLogo} />
        <SkillListItem label="HTML" Icon={HTML5Logo} />
        <SkillListItem label="CSS" Icon={CSS3Logo} />
        <SkillListItem label="Sass" Icon={SassLogo} />
        <SkillListItem label="BrightScript" Icon={RokuLogo} />
        <SkillListItem label="Git" Icon={GitLogo} />
    </ul>
)

export default SkillList
