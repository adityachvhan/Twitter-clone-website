import { Button, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Store/Auth/Action';

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Please enter a valid email"),
    password: Yup.string().required("Please enter a valid password"),
});

const SignInForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        validationSchema,
        onSubmit: (values) => {
            dispatch(loginUser(values));
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                <Grid xs={12} item className='space-y-5'>
                    <TextField
                        fullWidth
                        label="Email"
                        name='email'
                        variant='outlined' 
                        size='large'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        autoComplete="email" 
                    />

                    <TextField
                        fullWidth
                        label="Password"
                        name='password'
                        variant='outlined'
                        size='large'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        autoComplete="current-password" 
                    />
                </Grid>

                <Grid className='mt-20' item xs={12}>
                    <Button type='submit' variant='contained' fullWidth size='large'>Sign In</Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default SignInForm;
