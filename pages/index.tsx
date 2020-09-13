import React from 'react'
import NavBar from '@/components/nav-bar'
import MainContainer from '@/components/main-container'
import profileImg from '@/assets/images/profile-pic.jpg'

const contentList = ['Summary', 'Experience', 'Education', 'Skills', 'Projects', 'Contact']

const Home = () => (
    <div className="flex flex-col items-start">
        <NavBar content={contentList} image={profileImg} />
        <MainContainer content={contentList} />
    </div>
)

export default Home
