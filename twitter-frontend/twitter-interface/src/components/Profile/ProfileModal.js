import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik'
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
  borderRadius: 4,
  p: 4,
};

export default function ProfileModal({ open, handleClose }) {
  // const [open, setOpen] = React.useState(false);
  const [uploading, setUploading] = React.useState(false)


  const handleSubmit = (values) => {
    console.log("handleSubmit", values);
  }

  const formik = useFormik({
    initialValues: {
      fullName: "",
      website: "",
      location: "",
      bio: "",
      backgroundImage: "",
      image: ""
    },

    onSubmit: handleSubmit
  })

  const handleImageChange = (event) => {
    setUploading(true)
    const { name } = event.target
    const file = event.target.files[0];
    formik.setFieldValue(name, file);
    setUploading(false)
  }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>

            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <IconButton onClick={handleClose} aria-label='delete'>
                  <CloseIcon />
                </IconButton>
                <p className='text-sm'>Edit Profile</p>
              </div>

              <Button variant='contained' type='submit'>Save</Button>
            </div>


            <div className='overflow-y-scroll hidden-scroll-bar  overflow-x-hidden h-[60vh] mt-4'>
              <React.Fragment>
                <div className='w-full'>
                  <div className='relative'>
                    <img
                      src='https://media.istockphoto.com/id/1591225732/photo/modern-open-plan-office-space-with-tables-office-chairs-creeper-plants-and-manager-room.webp?b=1&s=612x612&w=0&k=20&c=O9QQtaNJQlebyoykA9WEC9RW6eub8GXbHcRrxVPSnX8='
                      alt='No Image Found'
                      className='w-full h-[12rem] object-cover object-center'
                    />

                    <input
                      type='file'
                      className='absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer'
                      name="backgroundImage"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                <div className='w-full transform -translate-y-20 ml-4 h-[6rem]'>
                  <div className='relative'>
                    <Avatar
                      alt='username'
                      src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png'
                      sx={{ width: "9rem", height: "9rem", border: "4px solid white" }}
                    />

                    <input className='absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer'
                      onChange={handleImageChange} name='image' type='file'
                    />
                  </div>
                </div>
              </React.Fragment>

              <div className='space-y-5'>
                <TextField
                  fullWidth
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                  helperText={formik.touched.fullName && formik.errors.fullName}
                />

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  id="bio"
                  name="bio"
                  label="Bio"
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                />

                <TextField
                  fullWidth
                  id="website"
                  name="website"
                  label="WebSite"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  error={formik.touched.website && Boolean(formik.errors.website)}
                  helperText={formik.touched.website && formik.errors.website}
                />

                <TextField
                  fullWidth
                  id="location"
                  name="location"
                  label="Location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  error={formik.touched.location && Boolean(formik.errors.location)}
                  helperText={formik.touched.location && formik.errors.location}
                />

                <div className='my-3'>
                  <p className='text-lg'>Birth Date . Edit</p>
                  <p className='text-2xl'>October 26, 1999</p>
                </div>

                <p className='py-3 text-lg'>Edit Professional Profile</p>


              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}