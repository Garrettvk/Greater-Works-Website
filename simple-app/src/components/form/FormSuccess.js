import React from 'react'
import 'styles/FormSuccess.css';
import checkMark from "images/check-icon.png";


function FormSuccess() {
    return (
        <div className="form-content-right">

            <img src={checkMark} alt="" className="check-mark" />

            <h1>Thank you for your response.</h1>
            <h2>We will be in touch with you very soon.</h2>


        </div>
    )
}

export default FormSuccess
