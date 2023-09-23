import Axios from "axios";
import { toast } from "react-toastify";
import {
    SUBMIT_FORM_FAILED,
    SUBMIT_FORM_REQUEST,
    SUBMIT_FORM_SUCCESS,
} from "../constants/contactConstants";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const customId = "custom-id-yes";

export const submitContactForm = ({ email, phone_number, first_name, message }) => async(dispatch) => {
    dispatch({
        type: SUBMIT_FORM_REQUEST,
    });
    console.log(
        { email, phone_number, first_name, message }
    );
    try {
        const { data } = await Axios.post(`${BASE_URL}/hackathon/contact-form`, {
            email: `${email}`,
            phone_number: `${phone_number}`,
            first_name: `${first_name}`,
            message: `${message}`,
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
        dispatch({
            type: SUBMIT_FORM_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: SUBMIT_FORM_FAILED,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
        toast.error(
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
            {
                toastId: customId,
            }
        );
    }
}