import './contact.css';
import star1 from "../../images/star1.svg";
import star2 from "../../images/star2.svg";
import star4 from "../../images/star4.svg";
import purpleflare13 from "../../images/purpleflare13.png";
import purpleflare12 from "../../images/purpleflare12.png";
import NavBar from '../../components/navbar/navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {submitContactForm}from '../../actions/contactActions'

const ContactPage = () => {
    const [email, setEmail] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(submitContactForm({
            email: email,
            phone_number: phone_number,
            first_name: first_name,
            message: message,
        }))
    }
    return (
        <div className="contact-container" id='contact-container'>
            <NavBar />
            <div className="stars star1"><img src={star4} alt="star" /></div>
            <div className="stars star2"><img src={star2} alt="star" /></div>
            <div className="stars star3"><img src={star4} alt="star" /></div>
            <div className="stars star4"><img src={star1} alt="star" /></div>
            <div className="flares flare1"><img src={purpleflare12} alt="purple flare" /></div>
            <div className="flares flare2"><img src={purpleflare13} alt="purple flare" /></div>
            <div className='text-stn'>
                <h3>Get in touch</h3>
                <p>Contact Information</p>
                <p>
                    27,Alara Street
                    Yaba 100012
                    Lagos State
                </p>
                <p id='full-width'>Call Us : 07067981819</p>
                <p id='grouped'>
                    <p>we are open from Monday-Friday</p>
                    <p>08:00am - 05:00pm</p>
                </p>
                <p id="colored">Share on</p>
                <p className="socials" id='full-width'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="white" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                        <path d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z" fill="white" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                        <path d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z" fill="#F8F8F8" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6.93994 5C6.93968 5.53043 6.72871 6.03904 6.35345 6.41392C5.97819 6.78881 5.46937 6.99927 4.93894 6.999C4.40851 6.99874 3.89991 6.78777 3.52502 6.41251C3.15014 6.03725 2.93968 5.52843 2.93994 4.998C2.94021 4.46757 3.15117 3.95897 3.52644 3.58408C3.9017 3.20919 4.41051 2.99874 4.94094 2.999C5.47137 2.99927 5.97998 3.21023 6.35486 3.58549C6.72975 3.96075 6.94021 4.46957 6.93994 5ZM6.99994 8.48H2.99994V21H6.99994V8.48ZM13.3199 8.48H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.9 14.9399 7.13 13.2799 10.16L13.3199 8.48Z" fill="#F8F8F8" />
                    </svg>
                </p>
            </div>
            <div className='form-stn'>
                <p>Questions or need assistance?</p>
                <p>Let us know  about it!</p>
                <p id='weird-text'>Email us below to any question related to our event</p>
                <input placeHolder='First Name' onChange={(e) => { setFirst_name(e.target.value) }} />
                <input placeHolder='Mail' onChange={(e) => { setEmail(e.target.value) }} />
                <input placeHolder='Phone Number' onChange={(e) => { setPhone_number(e.target.value) }} />
                <textarea placeHolder="Message" onChange={(e) => { setMessage(e.target.value) }} />
                {/* input depends on backend */}
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <p className="socials-mobile-view">
                <p id="colored">Share on</p>
                <div className="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="white" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                        <path d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z" fill="white" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                        <path d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z" fill="#F8F8F8" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6.93994 5C6.93968 5.53043 6.72871 6.03904 6.35345 6.41392C5.97819 6.78881 5.46937 6.99927 4.93894 6.999C4.40851 6.99874 3.89991 6.78777 3.52502 6.41251C3.15014 6.03725 2.93968 5.52843 2.93994 4.998C2.94021 4.46757 3.15117 3.95897 3.52644 3.58408C3.9017 3.20919 4.41051 2.99874 4.94094 2.999C5.47137 2.99927 5.97998 3.21023 6.35486 3.58549C6.72975 3.96075 6.94021 4.46957 6.93994 5ZM6.99994 8.48H2.99994V21H6.99994V8.48ZM13.3199 8.48H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.9 14.9399 7.13 13.2799 10.16L13.3199 8.48Z" fill="#F8F8F8" />
                    </svg>
                </div>
            </p>
            <Link to="/" className='back-button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <circle cx="11.5" cy="11.5" r="11" stroke="url(#paint0_linear_177_298)" />
                    <path d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667" stroke="white" />
                    <defs>
                        <linearGradient id="paint0_linear_177_298" x1="11.5" y1="0" x2="11.5" y2="23" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#903AFF" />
                            <stop offset="1" stop-color="#FF26B9" />
                        </linearGradient>
                    </defs>
                </svg>
            </Link>
        </div>
    )
}

export default ContactPage;

  // if there's time, add formik