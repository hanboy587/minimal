import { APICore } from './apiCore';

const api = new APICore();

function login(params: { username: string; password: string }) {
    const baseUrl = '/login';
	console.log("login 감지");
    return api.create(`${baseUrl}`, params);
}

function googleLogin (params: { idToken: string }) {
    const baseUrl = '/googleLogin/';
    return api.create(`${baseUrl}`, params);
};

function logout() {
    const baseUrl = '/logout';
    console.log("logout 감지");
    return api.create(`${baseUrl}`, {});
}

function signup(params: { fullname: string; email: string; password: string }) {
    const baseUrl = '/register/';
    return api.create(`${baseUrl}`, params);
}

function forgotPassword(params: { username: string }) {
    const baseUrl = '/forget-password/';
    return api.create(`${baseUrl}`, params);
}

function forgotPasswordConfirm(params: { email: string }) {
    const baseUrl = '/password/reset/confirm/';
    return api.create(`${baseUrl}`, params);
}

export { login, googleLogin, logout, signup, forgotPassword, forgotPasswordConfirm };
