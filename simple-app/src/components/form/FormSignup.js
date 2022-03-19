import React from 'react'
import useForm from 'components/form/useForm'
import validate from "components/form/validateInfo";


const FormSignup = ({ submitForm }) => {

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (

        <form className="contact__form" onSubmit={handleSubmit}>

            {/* First Name */}
            <label htmlFor="firstName">First Name</label>

            <input
                id="firstName"
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
            />

            {errors.firstName && <p>{errors.firstName}</p>}

            {/* Last Name */}
            <label htmlFor="lastName">Last Name</label>

            <input
                id="lastName"
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
            />

            {errors.lastName && <p>{errors.lastName}</p>}

            {/* Email */}
            <label htmlFor="email">Email</label>

            <input
                id="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
            />

            {errors.email && <p>{errors.email}</p>}

            {/* Phone */}
            <label htmlFor="phone">Phone</label>

            <input
                id="phone"
                type="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
            />

            {errors.phone && <p>{errors.phone}</p>}

            {/* Message */}
            <label htmlFor="message">Message</label>

            <textarea
                id="message"
                type="text"
                name="message"
                value={values.message}
                onChange={handleChange}
            />

            {errors.message && <p>{errors.message}</p>}

            <button type="submit">
                <i class="fa fa-paper-plane"></i>
                Send Message
            </button>

        </form>

    )
}

export default FormSignup;
