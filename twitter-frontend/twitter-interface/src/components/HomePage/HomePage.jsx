import React from 'react'
import { Grid } from '@mui/material'
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection'
import RightPart from '../Rightpart/RightPart'
import { Route, Routes } from 'react-router-dom'
import Profile from '../Profile/Profile'
import TweetDetails from '../TweetDetails/TweetDetails'
const HomePage = () => {
    return (
        <Grid container className='px-5 lg:px-36 justify-between flex'>

            <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
                <Navigation />
            </Grid>

            <Grid item xs={12} lg={6} className='hidden lg:block w-full relative px-5 lg:px-9'>

                <Routes>
                    <Route path='/' element={<HomeSection />} />
                    <Route path='/home' element={<HomeSection />} />
                    <Route path='/profile/:id' element={<Profile />} />
                    <Route path='/twit/:id' element={<TweetDetails />} />
                </Routes>


            </Grid>

            <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
                <RightPart />
            </Grid>
        </Grid>
    )
}

export default HomePage
