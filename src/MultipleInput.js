import React, { useState } from 'react';

const MultipleInput = () => {
    const [state, setState] = useState({
        fullname: '',
        email: '',
        phone: '',
        password: ''
    })
    const [records, setRecords] = useState([])

    const handleChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        // console.log(name, value);
        // setState({ ...state, [name]: value })

        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newRecord = { ...state, id: new Date().getTime().toString() }
        console.log(records);
        setRecords([...records, newRecord])
        console.log(records);

        setState({ fullname: '', email: '', phone: '', password: '' })
    }
    return (
        <div>
            <h1>Form</h1>
            <form action="" onSubmit={handleSubmit}>
                {/* autoComplete='off' for previous data are not showing */}
                <div>
                    <label htmlFor="fullname">Full Name:</label>
                    <input
                        type="text"
                        autoComplete='off'
                        name='fullname'
                        id='fullname'
                        placeholder="Your Name"
                        value={state.fullname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        autoComplete='off'
                        name='email'
                        id='email'
                        placeholder="Your email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        autoComplete='off'
                        name='phone'
                        id='phone'
                        placeholder="Your phone number"
                        value={state.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        autoComplete='off'
                        name='password'
                        id='password'
                        placeholder="Your password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit'>Registration</button>
            </form>
            <div>
                {
                    records.map((list) => {
                        return (
                            <div>
                                <p>{list.fullname}</p>
                                <p>{list.email}</p>
                                <p>{list.phone}</p>
                                <p>{list.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MultipleInput;