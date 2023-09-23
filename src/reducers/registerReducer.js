import { 
    REGISTER_USER_FAILED, 
    REGISTER_USER_REQUEST, 
    REGISTER_USER_SUCCESS,
    FETCH_CATEGORY_LIST_SUCCESS,
    FETCH_CATEGORY_LIST_FAILED,
    FETCH_CATEGORY_LIST_REQUEST,
} from "../constants/registerConstants";

export const registerUserReducer = (state = { loading: true, user: {} }, action) => {
    switch (action?.type) {
        case REGISTER_USER_REQUEST:
            return { ...state, loading: true };
        case REGISTER_USER_SUCCESS:
            return { loading: false, user: action?.payload };
        case REGISTER_USER_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}
export const fetchCategoryListReducer = (state = { loading: true, categories: [] }, action) => {
    switch (action?.type) {
        case FETCH_CATEGORY_LIST_REQUEST:
            return { ...state, loading: true };
        case FETCH_CATEGORY_LIST_SUCCESS:
            return { loading: false, categories: action?.payload };
        case FETCH_CATEGORY_LIST_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}
