import React, { useState, useEffect } from 'react';
import Validation from './Validation';

const useForm = (submitForm) => {
    const [state, setState] = useState({
        fullname: '',
        email: '',
        password: ''
    })
    const [error, setError] = useState({})
    const [dataIsCorrect, setDataIsCorrect] = useState(false)

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setError(Validation(state))
        setDataIsCorrect(true)
    }
    useEffect(() => {
        if (Object.keys(error).length === 0 && dataIsCorrect) {
            submitForm(true)
        }
    }, [error])
    return { handleChange, handleSubmit, error, state };
};

export default useForm;