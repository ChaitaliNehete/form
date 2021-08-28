import React, { useState, useEffect } from 'react';
// import Validation from './Validation';
import useForm from './useForm';

const SignUpForm = ({ submitForm }) => {
    const { handleChange, handleSubmit, error, state } = useForm(submitForm)
    return (
        <div>
            <h1>Create Account</h1>
            <form action="" onSubmit={handleSubmit}>
                {/* autoComplete='off' for previous data are not showing */}
                <div>
                    <label htmlFor="fullname">Full Name:</label>
                    <input
                        type="text"
                        name='fullname'
                        id='fullname'
                        value={state.fullname}
                        onChange={handleChange}
                    />
                    {error.fullname && <p>{error.fullname}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name='email'
                        id='email'
                        value={state.email}
                        onChange={handleChange}
                    />
                    {error.email && <p>{error.email}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name='password'
                        id='password'
                        value={state.password}
                        onChange={handleChange}
                    />
                    {error.password && <p>{error.password}</p>}
                </div>
                <button type='submit'>SignUp</button>
            </form>
        </div>
    );
};

export default SignUpForm;



