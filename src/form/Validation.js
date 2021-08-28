import React from 'react';

const Validation = (state) => {
    let error = {}

    if (!state.fullname) {
        error.fullname = 'Nmae is required'
    }
    if (!state.email) {
        error.email = 'email is requird'
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
        error.email = 'email is invalid'
    }
    if (!state.password) {
        error.password = 'password is required'
    } else if (state.password.length < 5) {
        error.password = 'password must be more than five character'
    }
    return error;
};

export default Validation;