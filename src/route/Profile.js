import React from 'react';
import { Redirect } from 'react-router';

const Profile = ({ authorized }) => {
    if (!authorized) {
        return <Redirect to='/login' />
    }
    return (
        <div>
            <h1>If you are here,you have allowed to be here..!</h1>
        </div>
    );
};

export default Profile;