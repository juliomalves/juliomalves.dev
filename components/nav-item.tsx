import React from 'react'

interface NavItemProps {
    label: string
    index: number
    active: boolean
    onItemClick: (i: number) => void
}

const NavItem = ({ label, index, active, onItemClick }: NavItemProps) => {
    const href = `#${label.toLowerCase()}`
    const onItemClicked = () => onItemClick(index)

    return (
        <div className={active ? 'active' : ''}>
            <a href={href} onClick={onItemClicked}>
                {label}
            </a>
        </div>
    )
}

export default NavItem
