import * as React from 'react'
import type { GetComponentProps } from '@/helpers/types'
import SvgIcon from '@/components/svg-icon'

interface ISkillItem {
    label: string
    icon: React.ReactElement<GetComponentProps<typeof SvgIcon>>
}

const SkillItem = ({ label, icon }: ISkillItem) => (
    <li className="flex flex-col flex-auto items-center mx-2 my-4 w-24" aria-label={label}>
        {icon}
        <p className="text-center mt-2 mb-0">{label}</p>
    </li>
)

export default SkillItem
