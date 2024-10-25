import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SignInForm from './SignInForm';
import SignUpFrom from './SignUpFrom';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline: "none",
    borderRadius: 4,
    p: 4,
};

export default function AuthModal({ open, handleClose }) {

    const location = useLocation()
    const navigate = useNavigate()

    const handleNavigate = () => {

        const path = location.pathname === "/signup" ? "/signin" : "/signup"
        navigate(path)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <h1 className='text-3xl pb-20 text-center font-bold'>Create Account</h1>
                    {
                        location.pathname === "/signup" ? <SignUpFrom /> : <SignInForm />
                    }

                    <h1 className='text-lg text-gray-500 py-5 text-center font-semibold'>
                        {
                            location.pathname === "/signup" ? "Allready Have An Account" : "If You Don't Have An Account "
                        }
                    </h1>

                    <Button variant='outlined' onClick={handleNavigate} sx={{ py: "15px" }} fullWidth>
                        {Location.pathname === "/signup" ? "signin" : "signup"}
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
