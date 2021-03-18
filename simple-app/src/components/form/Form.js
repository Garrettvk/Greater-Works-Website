import React, { useState } from 'react'
import FormSignup from 'components/form/FormSignup'
import FormSuccess from 'components/form/FormSuccess'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    return (

        <div className="form-container">

            {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}

        </div>
    )
}

export default Form
