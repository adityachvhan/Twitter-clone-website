import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate } from 'react-router-dom'
import { Avatar, Box, Button, Tab } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TweetCard from '../HomeSection/TweetCard';
import ProfileModal from './ProfileModal';

const Profile = () => {

    const [tabValues, setTabValues] = useState("1")
    const navigate = useNavigate()
    const [openProfileModal, setOpneProfileModal] = useState(false)
    const handleOpenProfileModel = () => setOpneProfileModal(true);
    const handleClose = () => setOpneProfileModal(false);

    const handleBack = () => {
        navigate(-1)
    }

    const handleFollowUser = () => {

    }

    const handleTabChange = (event, newValue) => {
        setTabValues(newValue)

        if (newValue === 4) {
            console.log("user twites");
        } else if (newValue === 1) {
            console.log("user Likes");
        }
    }

    return (
        <div className=''>
            <section className={`z-50 flex items-center sticky top-0 bg-opacity-95 p-5`}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='text-xl font-bold opacity-95 ml-5'>Core Java Hub</h1>
            </section>


            <section>
                <img
                    src='https://cdn.pixabay.com/photo/2018/01/22/07/31/portrait-3098319_640.jpg'
                    alt='no image found'
                    className='w-[100%] h-[15rem] object-cover'
                />
            </section>

            <section>
                <div className='flex justify-between items-start mt-5 h-[5rem] pl-6'>
                    <Avatar
                        className='transform -translate-y-24'
                        alt='username'
                        src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png'
                        sx={{ width: "9rem", height: "9rem", border: "4px solid white" }}
                    />

                    {true ? <Button variant='contained' onClick={handleOpenProfileModel}>Edit Profile</Button>
                        : <Button variant='contained' onClick={handleFollowUser}>{true ? "Follow" : "UnFollow"}</Button>}

                </div>

                <div>
                    <div className='flex items-center'>
                        <h1 className='font-bold text-lg'>Aditya Chavhan</h1>
                        {true && (<img className='ml-2 w-5 h-5'
                            src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                            alt="Verification card image" />)}
                    </div>
                    <h1 className='text-gray-500'>@corejavahub</h1>
                </div>

                <div className='mt-2 space-y-3'>
                    <p>Hello , I'm Aditya Chavhan Full Satck developer </p>

                    <div className='py-1 flex space-x-5'>
                        <div className=' flex items-center text-gray-500'>
                            <BusinessCenterIcon />
                            <p className='ml-2'>Eduaction</p>
                        </div>

                        <div className=' flex items-center text-gray-500'>
                            <LocationOnIcon />
                            <p className='ml-2'>India</p>
                        </div>

                        <div className=' flex items-center text-gray-500'>
                            <CalendarMonthIcon />
                            <p className='ml-2'>Joined May 2023</p>
                        </div>
                    </div>


                    <div className='flex items-center space-x-5'>

                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>90k</span>
                            <span className='text-gray-500'>Following</span>
                        </div>

                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>600k</span>
                            <span className='text-gray-500'>Followers</span>
                        </div>
                    </div>
                </div>
            </section>


            <section className='py-5'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={tabValues}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                                <Tab label="Tweets" value="1" />
                                <Tab label="Replies" value="2" />
                                <Tab label="Media" value="3" />
                                <Tab label="Likes" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {[1, 1, 1, 1].map((item) => <TweetCard />)}
                        </TabPanel>
                        <TabPanel value="2">Replies</TabPanel>
                        <TabPanel value="3">Media</TabPanel>
                        <TabPanel value="4">Likes</TabPanel>
                    </TabContext>
                </Box>
            </section>

            <section>
                <ProfileModal handleClose={handleClose} open={openProfileModal} />
            </section>
        </div>
    )
}

export default Profile
