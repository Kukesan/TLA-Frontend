import React from 'react'
import { Container } from '@mui/material'
import Navbar from '../Components/Home/Navbar/navbar'
import Landing from '../Components/Home/Landing/landing'
import Intro from '../Components/Home/Intro/intro'
import Event from '../Components/Home/Event/event'
import Gallery from '../Components/Home/Gallery/gallery'
import Timeline from '../Components/Home/Timeline/Timeline'
import Contact from '../Components/Home/Contact/contact'
import { Helmet } from 'react-helmet'

function Home() {
    return (
        <>
            <Helmet>
                <title>தமிழ் இலக்கிய மன்றம்</title>
                <meta
                    name="description"
                    content="மொறட்டுவை தமிழ் இலக்கியமன்றமானது தமிழ் மாணாக்கர் தம் ஆளுமை விருத்தி மற்றும் தமிழ் மக்கள் சார் வளர்ச்சிக்காக அயராது உதவிக் கரங்களை நீட்டும் ஒரு பல்கலைகழக குழுமமாகும்"
                />
                <meta
                    name="keywords"
                    content="TLA, Tamil Literary Association, moratuwa, uom, university of moratuwa, tamil, tamizharuvi"
                />
            </Helmet>
            <Landing />
            <Intro />
            <Event />
            {/* <Gallery /> */}
            {/* <Timeline /> */}
            <Contact />
        </>)
}
export default Home