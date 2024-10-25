import React, { useState } from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ReplyModal from './ReplyModal';
const TweetCard = () => {

    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [openReplyModal, setOpneReplyModal] = useState(false)
    const handleOpenReplyModel = () => setOpneReplyModal(true);
    const handleCloseReplyModal = () => setOpneReplyModal(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        handleClose()
    }

    const handleCreateRetweet = () => {

    }

    const handleLiketweet = () => {

    }

    return (
        <React.Fragment>

            {/* <div className='flex items-center font-semibold py-2 text-gray-700'>
                <RepeatIcon />
                <p>Your Tweet</p>
            </div> */}

            <div className='flex space-x-5'>
                <Avatar
                    onClick={() => navigate(`/profile/${6}`)}
                    className='cursor-pointer'
                    alt='username'
                    src='https://cdn.pixabay.com/photo/2020/07/01/12/{`8/icon-5359553_640.png'
                />

                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-2 cursor-pointer'>
                            <span className='font-semibold'>Core Java Hub</span>
                            <span className='text-gray-600'>@corejavahub.com .2m</span>
                            <img className='ml-2 w-5 h-5' src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png" alt="Verification card image" />
                        </div>

                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />

                            </Button>
                            <Menu

                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDelete}>Delete</MenuItem>
                                <MenuItem onClick={handleDelete}>Edit</MenuItem>
                            </Menu>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <div onClick={() => navigate(`/twit/${3}`)} className='cursor-pointer'>
                            <p className='p-0 mb-2'>twitter clone-@corejavahub with spring boot and react js</p>
                            <img className='w-[28rem] border border-gray-400 p-5 rounded-md mt-5'
                                src='https://cdn.pixabay.com/photo/2022/01/23/08/27/fashion-model-6960097_640.jpg'
                                alt='username'
                            />
                        </div>

                        <div className='py-5 flex flex-wrap justify-between items-center'>
                            <div className='space-x-3 text-gray-600 flex items-center'>
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>45</p>
                            </div>

                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                <RepeatIcon
                                    className='cursor-pointer'
                                    onClick={handleCreateRetweet}
                                />
                                <p>54</p>
                            </div>

                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                {true ? <FavoriteIcon
                                    className='cursor-pointer'
                                    onClick={handleLiketweet}
                                /> : <FavoriteBorderIcon
                                    className='cursor-pointer'
                                    onClick={handleLiketweet} />}
                                <p>54</p>
                            </div>


                            <div className='space-x-3 text-gray-600 flex items-center'>
                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>490</p>
                            </div>


                            <div className='space-x-3 text-gray-600 flex items-center'>
                                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal}/>
            </section>
        </React.Fragment>
    )
}

export default TweetCard 
