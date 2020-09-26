import React from 'react'
import MainContainer from '@/components/main-container'
import profileImg from '@/assets/images/profile-pic.jpg'

const contentList = ['Summary', 'Experience', 'Education', 'Skills', 'Projects', 'Contact']

const Home = () => (
    <div className="flex flex-col items-start">
        <MainContainer content={contentList} />
    </div>
)

export default Home
