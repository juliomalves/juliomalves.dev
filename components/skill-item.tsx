import * as React from 'react'
import type { GetComponentProps } from '@/helpers/types'
import SvgIcon from '@/components/svg-icon'

interface ISkillItem {
    hoverClassName: string
    label: string
    icon: React.ReactElement<GetComponentProps<typeof SvgIcon>>
}

const SkillItem = ({ hoverClassName, label, icon }: ISkillItem) => {
    const hoverClassNames = `transition-colors duration-200 group-hover:${hoverClassName}`
    const textClassName = `text-center mt-2 mb-0 ${hoverClassNames}`
    const styledIcon = React.cloneElement(icon, {
        className: `${icon.props.className} ${hoverClassNames}`
    })

    return (
        <li className="group flex flex-col flex-auto items-center mx-2 my-4 w-24" aria-label={label}>
            {styledIcon}
            <p className={textClassName}>{label}</p>
        </li>
    )
}

export default SkillItem
