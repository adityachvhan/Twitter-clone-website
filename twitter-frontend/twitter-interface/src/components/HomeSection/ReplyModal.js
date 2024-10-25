import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';
import * as Yup from 'yup'

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
};

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required")
})

export default function ReplyModal({open,handleClose}) {
    const navigate = useNavigate()
    const [uploadingImage, setUploadingImage] = React.useState(false)
    const [selectedImage, setSelectedImage] = React.useState("")

    const handleSubmit = (value) => {
        console.log("values", value);

    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: "",
            twitId: 4
        },
        onSubmit: handleSubmit,
        validationSchema
    })


    const handleSelectImage = (event) => {
        setUploadingImage(true)
        const imgUrl = event.target.files[0]
        formik.setFieldValue("image", imgUrl)
        setSelectedImage(imgUrl)
        setUploadingImage(false)
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

                            </div>

                            <div className='mt-2'>
                                <div onClick={() => navigate(`/twit/${3}`)} className='cursor-pointer'>
                                    <p className='p-0 mb-2'>twitter clone-@corejavahub with spring boot and react js</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <section className={`py-10`}>
                        <div className='flex space-x-5'>
                            <Avatar
                                alt='username'
                                src='https://cdn.pixabay.com/photo/2020/07/01/12/{`8/icon-5359553_640.png'
                            />
                            <div className='w-full'>
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <input type='text' name='content' placeholder='what is happening'
                                            className={`border-none outline-none bg-transparent text-xl`}
                                            {...formik.getFieldProps("content")}
                                        />
                                        {formik.errors.content && formik.touched.content && (
                                            <span className='text-red-500'>{formik.errors.content}</span>
                                        )}
                                    </div>

                                    {/* <div>
                                <img src=''/>
                            </div> */}

                                    <div className='flex justify-between items-center mt-5'>
                                        <div className='flex items-center space-x-5'>
                                            <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                                <ImageIcon className='text-[#1d9bf0]' />
                                                <input type='file' name='imageFile' className='hidden' onChange={handleSelectImage} />
                                            </label>

                                            <FmdGoodIcon className='text-[#1d9bf0]' />
                                            <TagFacesIcon className='text-[#1d9bf0]' />
                                        </div>


                                        <div>
                                            <Button
                                                sx={{ width: "100%", borderRadius: "20px", paddingY: "8px", paddingX: "20px", bgcolor: "#1e88e5" }}
                                                variant='contained'
                                                type='submit'
                                            >
                                                Tweet
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
