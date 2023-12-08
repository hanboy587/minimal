import { AuthActionTypes } from './constants';

export type AuthActionType = {
    type:
        | AuthActionTypes.API_RESPONSE_SUCCESS
        | AuthActionTypes.API_RESPONSE_ERROR
        | AuthActionTypes.FORGOT_PASSWORD
        | AuthActionTypes.FORGOT_PASSWORD_CHANGE
        | AuthActionTypes.LOGIN_USER
        | AuthActionTypes.GOOGLE_LOGIN_USER
        | AuthActionTypes.LOGOUT_USER
        | AuthActionTypes.RESET
        | AuthActionTypes.SIGNUP_USER;
    payload: {} | string;
};

type User = {
    id: number;
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    token: string;
};

// common success
export const authApiResponseSuccess = (actionType: string, data: User | {}): AuthActionType => ({
    type: AuthActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});
// common error
export const authApiResponseError = (actionType: string, error: string): AuthActionType => ({
    type: AuthActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const loginUser = (username: string, password: string): AuthActionType => ({
    type: AuthActionTypes.LOGIN_USER,
    payload: { username, password },
});

export const googleLoginUser = (idToken:string): AuthActionType => ({
    type: AuthActionTypes.GOOGLE_LOGIN_USER,
    payload: { idToken },
});

export const logoutUser = (): AuthActionType => ({
    type: AuthActionTypes.LOGOUT_USER,
    payload: {},
});

export const signupUser = (fullname: string, email: string, password: string): AuthActionType => ({
    type: AuthActionTypes.SIGNUP_USER,
    payload: { fullname, email, password },
});
// 비밀번호찾기
export const forgotPassword = (userID: string): AuthActionType => ({
    type: AuthActionTypes.FORGOT_PASSWORD,
    payload: { userID },
});
// 아이디찾기 
export const forgotPassword2 = (username: string, userphonNum: string): AuthActionType => ({
    type: AuthActionTypes.FORGOT_PASSWORD,
    payload: { username, userphonNum },
});

export const resetAuth = (): AuthActionType => ({
    type: AuthActionTypes.RESET,
    payload: {},
});
