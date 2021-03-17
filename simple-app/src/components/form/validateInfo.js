export default function validateInfo(values) {

    let errors = {}

    if (!values.firstName.trim()) {
        errors.firstName = "First name required"
    }

    if (!values.lastName.trim()) {
        errors.lastName = "Last name required"
    }

    if (!values.email) {
        errors.email = "Email required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    if (values.message.length < 2) {
        errors.message = "Please enter a message"
    }

    return errors;
}