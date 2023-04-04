// ** React Imports
import { useState } from "react"

// ** React Icons Imports
import { FiArrowRight } from "react-icons/fi"

// ** Styles Imports
import styles from './ContactForm.module.scss'

const ContactForm = () => {

    const [values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    })

    const [errors, setErrors] = useState({
        name: false,
        phone: false,
        email: false,
        subject: false,
        message: false,
    })

    const [loading, setLoading] = useState(false)

    const clearValues = () => {
        setValues({
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    const clearErrors = () => {
        setErrors({
            name: false,
            phone: false,
            email: false,
            subject: false,
            message: false,
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        clearErrors()
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const validateFields = (): boolean => {
        let isValid = true

        if (values.message === '') {
            setErrors({ ...errors, message: true })
            isValid = false
        }

        if (values.email === '') {
            setErrors({ ...errors, email: true })
            isValid = false
        }
        if (values.name === '') {
            setErrors({ ...errors, name: true })
            isValid = false
        }

        return isValid
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const checkValidation = validateFields()

        if (!checkValidation)
            return

        try {
            const resp = await fetch('/api/contact', {
                method: "POST",
                body: JSON.stringify(values)
            })

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className={styles.contactForm}>
            <form onClick={handleSubmit}>
                <div className={styles.formInner}>
                    <div className={`${styles.formGroup} ${styles.inputName}`}>
                        <label htmlFor="name">Your Name <sup>*</sup></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <p>{errors.name && '* Name is a required field!'}</p>
                    </div>
                    <div className={`${styles.formGroup} ${styles.inputPhone}`}>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={values.phone}
                            onChange={(e) => handleChange(e)}
                        />
                        <p></p>
                    </div>
                    <div className={`${styles.formGroup} ${styles.inputEmail}`}>
                        <label htmlFor="email">Email <sup>*</sup></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <p>{errors.email && '* Email is a required field!'}</p>
                    </div>
                    <div className={`${styles.formGroup} ${styles.inputSubject}`}>
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={values.subject}
                            onChange={(e) => handleChange(e)}
                        />
                        <p></p>
                    </div>
                    <div className={`${styles.formGroup} ${styles.inputMessage}`}>
                        <label htmlFor="message">Your Message <sup>*</sup></label>
                        <textarea
                            id="message"
                            name="message"
                            value={values.message}
                            cols={30}
                            rows={10}
                            onChange={(e) => handleChange(e)}
                            required
                        ></textarea>
                        <p>{errors.message && '* Message is a required field!'}</p>
                    </div>
                    <div className={`${styles.formGroup}  ${styles.submit}`}>
                        <button
                            type="submit"
                            id="submit"
                            name="submit"
                        >
                            {loading ? 'Please Wait' : <>Send Message <FiArrowRight aria-hidden="true" /></>}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm