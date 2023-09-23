import {
    legacy_createStore as createStore,
    compose,
    applyMiddleware,
    combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { 
    fetchCategoryListReducer, registerUserReducer,
 } from "./reducers/registerReducer";
 import { 
    submitContactFormReducer,
 } from "./reducers/contactReducer";

const initialState = {
    // for initial states in local or session storage, maybe not needed
};

const reducer = combineReducers({
    fetchCategories: fetchCategoryListReducer,
    registerUser: registerUserReducer,
    submitContactForm: submitContactFormReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;