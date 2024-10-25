import React from 'react'
import { Button, Grid } from '@mui/material'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import AuthModal from './AuthModal';
const Authentication = () => {

  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  const handleOpenAuthModal = () => setOpenAuthModal(true);
  const handleCloseAuthModal = () => setOpenAuthModal(false);

  return (
    <div>
      <Grid container className='overflow-y-hidden'>
        <Grid className='hidden lg:block' item lg={7}>
          <img src='https://cdn.pixabay.com/photo/2015/12/09/13/55/twitter-1084764_640.jpg'
            alt=''
            className='w-full h-screen'
          />

          <div className='absolute top-[26%] left-[19%]'>
            <svg height="300" width="300" viewBox="0 0 24 24" aria-hidden="true" class="r-jwli3a r-4qtqp9 r-yyyayoo r-labphf r-1777fci r-dnmzrs r-494qqr r-bnwqim r-1plcrui r-lrvibr">
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </div>
        </Grid>

        <Grid className='px-10 ' xs={2} lg={5}>
          <h1 className='font-bold text-7xl mt-10'>Happening Now</h1>
          <h1 className='font-bold text-3xl py-16'>Join Twitter Today</h1>

          <div className='w-[60%]'>
            <div className='w-full'>
              <GoogleOAuthProvider>
                <GoogleLogin />
              </GoogleOAuthProvider>
              <p className='py-5 text-center'>OR</p>

              <Button
                onClick={handleOpenAuthModal}
                variant='contained' fullWidth sx={{ borderRadius: 2 }}>Create Account</Button>

              <p className='mt-2 text-sm'>
                By signing up, you agree to our
                <a href='#' className='text-blue-600 hover:underline'> Terms of Service</a> and
                <a href='#' className='text-blue-600 hover:underline'> Privacy Policy</a>, including the use of cookies.
              </p>
            </div>


            <div className='mt-3'>
              <h1 className='font-bold text-xl mb-5'>Already have an account?</h1>
              <Button
                onClick={handleOpenAuthModal}
                variant='outlined' fullWidth sx={{ borderRadius: 2 }}>Sign In</Button>
            </div>
          </div>
        </Grid>
      </Grid>

      <AuthModal open={openAuthModal} handleClose={handleCloseAuthModal} />
    </div>
  )
}

export default Authentication
