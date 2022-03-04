import React from 'react'
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

const SignUp = () => {
  const validate = Yup.object({
      firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
      lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
      email: Yup.string()
      .email('email is invalid')
      .required('Email is required'),
      password: Yup.string()
      .min(8, 'Password must be atleast 8 characters long')
      .required('Password is required'),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required(' Confrim password is required'),
  })
  return (
    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }}
        validationSchema={validate}
    >
        {formik => 
            (
                <div>
                    <h1 className='my-4 font-weight-bold-display-4'>Sign Up</h1>
                    {console.log(formik.values)}
                    <Form>
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="Last Name" name="lastName" type="text" />
                        <TextField label="Email" name="email " type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="password" />
                        <button className='btn btn-dark mt-3' type="submit">SignUp</button><br/>
                        <button className='btn btn-danger mt-3 ml-3' type='reset'>Reset</button>
                    </Form>
                </div>
            )
        }
    </Formik>
  )
}

export default SignUp