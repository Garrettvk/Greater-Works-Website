// custom hook

import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

const useForm = (callback, validate) => {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    // value of e.target
    const [value, setValue] = useState({});


    // function for sending email of form input 
    const sendEmail = e => {

        console.log('email function ran')

        emailjs.sendForm('service_i0yqoos', 'template_gwc', value, 'user_WkRD847UjrernWvx03HkQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


    const handleChange = e => {

        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        // keeps page from refreshing when submit button is pressed
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true)
        console.log('submitted')

        // set the value of e.target
        setValue(e.target);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            sendEmail() // send email
            callback() // send setIsSubmitted(true) back to Form.js component
        }
    }, [errors]) // only trigger when errors are updated

    return { handleChange, values, handleSubmit, errors };
};

export default useForm;