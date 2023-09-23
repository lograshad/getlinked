import Axios from "axios";
import { toast } from "react-toastify";
import {
    REGISTER_USER_FAILED,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    FETCH_CATEGORY_LIST_REQUEST,
    FETCH_CATEGORY_LIST_SUCCESS,
    FETCH_CATEGORY_LIST_FAILED,
} from "../constants/registerConstants";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const customId = "custom-id-yes";

export const registerUser = ({
    email,
    phone_number,
    team_name,
    group_size,
    project_topic,
    category,
    privacy_poclicy_accepted
}) => async (dispatch) => {
    dispatch({
        type: REGISTER_USER_REQUEST,
    });
    try {
        const { data } = await Axios.post(`${BASE_URL}/hackathon/contact-form`, {
            email: `${email}`,
            phone_number: `${phone_number}`,
            team_name: `${team_name}`,
            group_size: group_size,
            project_topic: `${project_topic}`,
            category: category,
            privacy_poclicy_accepted: privacy_poclicy_accepted,
        }, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAILED,
            payload:
                error.response && error.response.data.message
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

export const fetchCategoryList = () => async (dispatch) => {
    dispatch({
        type: FETCH_CATEGORY_LIST_REQUEST,
    });
    try {
        const { data } = await Axios.get(`${BASE_URL}/hackathon/categories-list`, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
        dispatch({
            type: FETCH_CATEGORY_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_CATEGORY_LIST_FAILED,
            payload: 
            error.response && error.response.data.message
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