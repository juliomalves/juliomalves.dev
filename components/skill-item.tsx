import * as React from 'react'

interface ISkillItem {
    label: string
    icon: React.ReactNode
}

const SkillItem = ({ label, icon }: ISkillItem) => (
    <li className="flex flex-col flex-auto items-center mx-2 my-4 w-24" aria-label={label}>
        {icon}
        <p className="mt-2 mb-0">{label}</p>
    </li>
)

export default SkillItem
