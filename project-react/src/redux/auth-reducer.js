import { authAPI } from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {InjectedFormProps, stopSubmit} from "redux-form";
import {AppThunk} from "./redax-store";

const SET_USER_DATA = "SET_USER_DATA";

export const initialState = {
    id: 1,
    email: "",
    login: "",
    isAuth: false,
};


const authReducer = (state=initialState,action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                ...action.payload,
            };
            default:
                return state;
    }

};

export const  setUserDataAC  = (
    id,login,email,isAuth
    ) => {
        return {
            type: SET_USER_DATA,
        payload: {id, email, login, isAuth},
        }
    };

    export const getUserData =() => (dispatch) => { 
        return  authAPI.me().then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(
                    setUserDataAC(
                        response.data.data.id,
                        response.data.data.login,
                        response.data.data.email,
                        true
                    )
                );
            }
        });
    };

    export const login = (email, password, rememberMe) =>
    (dispatch) => {
        authAPI.login(email, password, rememberMe).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getUserData());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
                dispatch(stopSubmit("Login", {_error: message}))
            }
        });
    };

    export const LogOut = ()=> (dispatch) => {
        authAPI.Logout().then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAC(response.data.id, response.data.login, response.data.email, false));
            }
        });
    };

    

export default authReducer;