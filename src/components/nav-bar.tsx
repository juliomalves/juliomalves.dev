import React, { useState } from 'react'
import NavItem from '@components/nav-item'

type Props = {
    image: string
    content: string[]
}

const NavBar = ({ image, content }: Props): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState(0)
    const onNavItemClicked = (index): void => setActiveIndex(index)
    const navItems = content.map(
        (item: string, index: number): JSX.Element => {
            const isActive = activeIndex === index
            const itemId = item.toLowerCase()
            return <NavItem label={item} key={itemId} index={index} active={isActive} onItemClick={onNavItemClicked} />
        }
    )

    return (
        <header className="flex flex-row justify-center items-center w-full h-32 text-white bg-gray-600">
            <a href="">
                <figure>
                    <img
                        alt="Julio Alves profile image"
                        className="w-24 h-auto border-2 border-gray-600 hover:border-white rounded-full"
                        src={image}
                    />
                </figure>
            </a>
            <nav className="flex flex-row justify-around w-3/4">{navItems}</nav>
        </header>
    )
}

export default NavBar
