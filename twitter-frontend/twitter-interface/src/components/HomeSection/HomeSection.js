import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TweetCard from './TweetCard';

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required")
})

const HomeSection = () => {

    const [uploadingImage, setUploadingImage] = useState(false)
    const [selectedImage, setSelectedImage] = useState("")

    const handleSubmit = (value) => {
        console.log("values", value);

    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: ""
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
        <div className='space-y-5'>
            <section>
                <h1 className='py-5 text-xl opacity-90 font-bold'>HomeSection</h1>
            </section>

            {/* form section */}
            <section className={`pb-10`}>
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


            {/* tweet card */}

            <section>
                {[1, 1, 1, 1].map((item) => <TweetCard />)}
            </section>
        </div>
    )
}

export default HomeSection
