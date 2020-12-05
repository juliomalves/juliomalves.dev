import * as React from 'react'

interface ISkillItem {
    label: string
    Icon: string
}

const SkillItem = ({ label, Icon }: ISkillItem) => (
    <li className="flex flex-col flex-auto items-center mx-2 my-4 w-24" aria-label={label}>
        <Icon />
        <p className="mt-2 mb-0">{label}</p>
    </li>
)

export default SkillItem
