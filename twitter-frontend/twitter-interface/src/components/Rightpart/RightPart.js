import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SubscribtionModal from '../SubscribtionModal/SubscribtionModal';

const RightPart = () => {

    const [opensubscriptionModal, setOpenSubscriptionModal] = useState(false) // Use useState instead of React.createClass
    const handleopenSubscriptionModal = () => setOpenSubscriptionModal(true);
    const handleCloseSubscriptionModal = () => setOpenSubscriptionModal(false);

    const handleChangeTheme = () => {
        // Handle theme change here
    }

    return (
        <div className='py-5 sticky top-0'>
            <div className='relative flex items-center'>
                <input type='text' className='py-3 rounded-full text-gray-500 pl-12 w-full' />

                <div className='pl-3 pt-3 absolute top-0 left-0'>
                    <SearchIcon className='text-gray-500' />
                </div>
                <Brightness4Icon onClick={handleChangeTheme} className='ml-3 cursor-pointer' />
            </div>

            <section className='my-5'>
                <h1 className='text-xl font-bold'>Get Verified</h1>
                <h1 className='font-bold my-2'>Subscribed to unlock the new feature</h1>

                <Button variant='contained' sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }} onClick={handleopenSubscriptionModal}>
                    Get Verified {/* Corrected typo from 'Varified' to 'Verified' */}
                </Button>
            </section>

            <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-xl py-1'>What is going around the world</h1>

                <div className='text-sm'>
                    <p>FIFA Women's Cup Live</p>
                    <p className='font-bold'>Philippines VS Switzerland</p> {/* Corrected spelling from 'Phillippines' to 'Philippines' */}
                </div>

                {[1, 1, 1, 1].map((item, index) => (
                    <div key={index} className='flex justify-between w-full'>
                        <div>
                            <p>Entertainment - Trending</p>
                            <p>#The Marvel Universe</p> {/* Corrected 'Marval' to 'Marvel' */}
                            <p>50K Tweets</p>
                        </div>
                        <MoreHorizIcon />
                    </div>
                ))}
            </section>

            <section>
                <SubscribtionModal open={opensubscriptionModal} handleClose={handleCloseSubscriptionModal} />
            </section>
        </div >
    )
}

export default RightPart
