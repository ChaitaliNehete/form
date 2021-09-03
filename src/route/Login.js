import React from 'react';
import { useHistory } from 'react-router';

const Login = () => {
    let history = useHistory()
    return (
        <div>
            <input type="text" placeholder='username' />
            <input type="text" placeholder='password' />
            <button onClick={() => { history.push('/profile') }}>
                login
            </button>
        </div >
    );
};

export default Login;