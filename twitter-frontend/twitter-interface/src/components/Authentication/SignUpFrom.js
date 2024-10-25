import { Button, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { registerUser } from '../../Store/Auth/Action';

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Please enter a valid email"),
    password: Yup.string().required("Please enter a valid password"),
});

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" }
];

const SignUpForm = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            dateOfBirth: {
                day: "",
                month: "",
                year: "",
            }
        },

        validationSchema,
        onSubmit: (values) => {
            const { day, month, year } = values.dateOfBirth;
            const dateOfBirth = `${year}-${month}-${day}`;
            values.dateOfBirth = dateOfBirth;
            dispatch(registerUser(values))
            console.log("Form values", values);
        }
    });

    const handleDateChange = (name) => (event) => {
        formik.setFieldValue("dateOfBirth", {
            ...formik.values.dateOfBirth,
            [name]: event.target.value
        });
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>

                <Grid xs={12} item className='space-y-5'>

                    <TextField
                        fullWidth
                        label="Full Name"
                        name='fullName'
                        variant='outlined'
                        size='large'
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                        helperText={formik.touched.fullName && formik.errors.fullName}
                    />

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
                    />
                </Grid>

                <Grid item xs={4}>
                    <InputLabel>Date</InputLabel>
                    <Select name='day'
                        fullWidth
                        onChange={handleDateChange("day")}
                        onBlur={formik.handleBlur}
                        value={formik.values.dateOfBirth.day}>
                        {
                            days.map((day) => (
                                <MenuItem key={day} value={day}>
                                    {day}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </Grid>

                <Grid item xs={4}>
                    <InputLabel>Month</InputLabel>
                    <Select name='month'
                        fullWidth
                        onChange={handleDateChange("month")}
                        onBlur={formik.handleBlur}
                        value={formik.values.dateOfBirth.month}>
                        {
                            months.map((month) => (
                                <MenuItem key={month.value} value={month.value}>
                                    {month.label}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </Grid>

                <Grid item xs={4}>
                    <InputLabel>Year</InputLabel>
                    <Select name='year'
                        fullWidth
                        onChange={handleDateChange("year")}
                        onBlur={formik.handleBlur}
                        value={formik.values.dateOfBirth.year}>
                        {
                            years.map((year) => (
                                <MenuItem key={year} value={year}>
                                    {year}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </Grid>

                <Grid className='mt-20' item xs={12}>
                    <Button type='submit' variant='contained' fullWidth size='large'>Sign Up</Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default SignUpForm;
