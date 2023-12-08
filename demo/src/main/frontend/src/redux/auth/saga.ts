import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from 'helpers/api/apiCore';
import {
    login as loginApi,
    logout as logoutApi,
    signup as signupApi,
    forgotPassword as forgotPasswordApi,
	googleLogin as googleLoginApi,
} from 'helpers';
import { authApiResponseSuccess, authApiResponseError } from './actions';
import { AuthActionTypes } from './constants';
import jwtDecode from "jwt-decode";

type UserData = {
    payload: {
        username: string;
        password: string;
        fullname: string;
        email: string;
		idToken: string;
    };
    type: string;
};

const api = new APICore();

/**
 * Login the user
 * @param {*} payload - username and password
 */
function* login({ payload: { username, password }, type }: UserData): SagaIterator {
    try {
        const response = yield call(loginApi, { username, password });
        console.log("response : ", response);
        const user = response.data;
        api.setLoggedInUser(user);
        setAuthorization(user);
        yield put(authApiResponseSuccess(AuthActionTypes.LOGIN_USER, user));
    } catch (error: any) {
        yield put(authApiResponseError(AuthActionTypes.LOGIN_USER, error));
        api.setLoggedInUser(null);
        setAuthorization(null);
    }
}

function* googleLogin({ payload: { idToken }, type }: UserData): SagaIterator {
	try {
		console.log('googleLogin');
        const response = yield call(googleLoginApi, { idToken });
        const user = response.data;
        setAuthorization(user);
        yield put(authApiResponseSuccess(AuthActionTypes.GOOGLE_LOGIN_USER, user));
	} catch (error: any) {
        yield put(authApiResponseError(AuthActionTypes.GOOGLE_LOGIN_USER, error));
        api.setLoggedInUser(null);
        setAuthorization(null);
	}
};

/**
 * Logout the user
 */
function* logout(): SagaIterator {
    try {
        yield call(logoutApi);
        api.setLoggedInUser(null);
        setAuthorization(null);
        yield put(authApiResponseSuccess(AuthActionTypes.LOGOUT_USER, {}));
    } catch (error: any) {
        yield put(authApiResponseError(AuthActionTypes.LOGOUT_USER, error));
    }
}

function* signup({ payload: { fullname, email, password } }: UserData): SagaIterator {
    try {
        const response = yield call(signupApi, { fullname, email, password });
        const user = response.data;
        // api.setLoggedInUser(user);
        // setAuthorization(user['token']);
        yield put(authApiResponseSuccess(AuthActionTypes.SIGNUP_USER, user));
    } catch (error: any) {
        yield put(authApiResponseError(AuthActionTypes.SIGNUP_USER, error));
        api.setLoggedInUser(null);
        setAuthorization(null);
    }
}

function* forgotPassword({ payload: { username } }: UserData): SagaIterator {
    try {
        const response = yield call(forgotPasswordApi, { username });
        yield put(authApiResponseSuccess(AuthActionTypes.FORGOT_PASSWORD, response.data));
    } catch (error: any) {
        yield put(authApiResponseError(AuthActionTypes.FORGOT_PASSWORD, error));
    }
}
export function* watchLoginUser() {
    yield takeEvery(AuthActionTypes.LOGIN_USER, login);
}

export function* watchGoogleLoginUser() {
    yield takeEvery(AuthActionTypes.GOOGLE_LOGIN_USER, googleLogin);
}

export function* watchLogout() {
    yield takeEvery(AuthActionTypes.LOGOUT_USER, logout);
}

export function* watchSignup() {
    yield takeEvery(AuthActionTypes.SIGNUP_USER, signup);
}

export function* watchForgotPassword() {
    yield takeEvery(AuthActionTypes.FORGOT_PASSWORD, forgotPassword);
}

function* authSaga() {
    yield all([fork(watchLoginUser), fork(watchGoogleLoginUser),fork(watchLogout), fork(watchSignup), fork(watchForgotPassword)]);
}

export default authSaga;
