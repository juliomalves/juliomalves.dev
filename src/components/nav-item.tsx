import React from 'react'

type Props = {
    label: string
    index: number
    active: boolean
    onItemClick: (i: number) => void
}

const NavItem = ({ label, index, active, onItemClick }: Props): JSX.Element => {
    const className = `nav-link color--white ${active ? ' active' : ''}`
    const href = `#${label.toLowerCase()}`
    const onItemClicked = (): void => onItemClick(index)

    return (
        <div className="nav-item">
            <a className={className} href={href} onClick={onItemClicked}>
                {label}
            </a>
        </div>
    )
}

export default NavItem
