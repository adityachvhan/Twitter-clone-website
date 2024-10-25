import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    outline: "none",
    boxShadow: 24,
    p: 4,
    borderRadius: 4
};

const features = [
    "Prioritized rankings in conversations and search",
    "See approximately twice as many Tweets between ads in your For You and Following timelines.",
    "Add bold and italic text in your Tweets.",
    "Post longer videos and 1080p video uploads.",
    "All the existing Blue features, including Edit Tweet, Bookmark Folders and early access to new features."
]

export default function SubscribtionModal({ open, handleClose }) {

    const [plan, setPlan] = React.useState("Annually")

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                            <IconButton onClick={handleClose} aria-label='delete'>
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </div>

                    <div className='flex justify-center py-10'>
                        <div className='w-[80%] space-y-5'>
                            <div className='p-5 flex items-center rounded-md justify-between bg-slate-400 shadow-lg'>
                                <h1 className='text-xl pr-5'>Blue subscribers with a verified phone number will receive a blue checkmark upon approval.</h1>
                                <img className=' w-24 h-24' src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png" alt="Verification card image" />
                            </div>

                            <div className='flex justify-between border rounded-full px-5 py-3 border border-gray-500'>
                                <div>
                                    <span onClick={() => setPlan("Annually")} className={`${plan === "Annually" ? "text-black" : "text-gray-500"} cursor-pointer`}>
                                        Annually
                                    </span>
                                    <span className='ml-5 text-sm'>Save 12%</span>
                                </div>

                                <p onClick={() => setPlan("monthly")} className={`${plan === "monthly" ? "text-black" : "text-gray-500"} cursor-pointer`}>
                                    Monthly subscription
                                </p>
                            </div>

                            <div className='space-y-3'>
                                {features.map((item) => <div className='items-center flex space-x-5'>
                                    <FiberManualRecordIcon sx={{ width: "7px", height: "7px" }} />
                                    <p>{item}</p>
                                </div>)}
                            </div>

                            <div className='flex justify-center cursor-pointer bg-gray-500 text-white rounded-full px-5 py-3'>
                                {plan === "Annually" ? (
                                    <div>
                                        <span className='line-through italic'>
                                            ₹ 7,800.00
                                        </span>
                                        <span className='px-3'>₹ 6,800/ year</span>
                                    </div>
                                ) : (
                                    <span className='px-3'>₹ 450/ month</span>
                                )}
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
