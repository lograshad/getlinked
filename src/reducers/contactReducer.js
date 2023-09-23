import { 
    SUBMIT_FORM_FAILED, 
    SUBMIT_FORM_REQUEST, 
    SUBMIT_FORM_SUCCESS,
} from "../constants/contactConstants";

export const submitContactFormReducer = (state = { loading: true, user: {} }, action) => {
    switch (action?.type) {
        case SUBMIT_FORM_REQUEST:
            return { ...state, loading: true };
        case SUBMIT_FORM_SUCCESS:
            return { loading: false, user: action?.payload };
        case SUBMIT_FORM_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}