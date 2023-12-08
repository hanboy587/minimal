import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import config from '../../config';
// import {BiError} from "react-icons/all";


// content type
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.baseURL = config.API_URL;

// intercepting to capture errors
const REFRESH_URL = "/oauth/token";
axios.interceptors.request.use((config: any) => {
    let token: string | null = null;
    if (config.url == REFRESH_URL) {
        token = sessionStorage.getItem(REFRESH_TOKEN);
    } else {
        token = sessionStorage.getItem(ACCESS_TOKEN);
    }
    config.headers.Authorization = BEARER_STRING + token;
    return config;
});

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        const { config, response, response: {status} } = error;
        
        let message : string = response.data;
        if(status === 400){
            return Promise.reject(message);
        }
        if (status === 500 || status == 403 || config.sent) {
            return Promise.reject(message);
        }

        if (status == 401 && config.url != "/login") {
            config.sent = true;
            const originalRequest = config;
            const newAccessToken = await tokenRefresh(originalRequest);
            originalRequest.headers.Authorization = BEARER_STRING + newAccessToken;
            return reRequest(originalRequest);
        } else {
            message = error.response.data;
            return Promise.reject(message);
        }
        // 500error
        if (error && error.response && error.response.status === 500) {
            window.location.href = '/error-500';
        }
    }
);


const tokenRefresh = async(originalRequest : any) => {
    try {
        const res = await axios.post(REFRESH_URL);
        const data = sessionStorage.getItem(AUTH_SESSION_KEY);
        if (data) {
            let newData : any = JSON.parse(data);
            newData.accessToken = await res.data.accessToken;
            sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(newData));
        } else {
            sessionStorage.clear();
        }
        sessionStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
        if (res.data.accessToken == null) {
            sessionStorage.clear();
        }
        return res.data.accessToken;
    } catch (e) {
        // console.log("e : ", e);
        console.log("tokenRefresh error");
        window.location.href = "/";
        sessionStorage.clear();
    }
    // console.log("tokenRefresh end");
    return null;

};

const reRequest = async(originalRequest : any) => {
    if (originalRequest.method == "get") {
        return axios.get(originalRequest.url);
    } else if (originalRequest.method == "post") {
        return axios.post(originalRequest.url, originalRequest.data);
    } else if (originalRequest.method == "put") {
        return axios.put(originalRequest.url, originalRequest.data);
    } else {
        return axios.patch(originalRequest.url, originalRequest.data);
    }
};


const AUTH_SESSION_KEY = 'hyper_user';
const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";
const BEARER_STRING = "Bearer ";


/**
 * Sets the default authorization
 * @param {*} userInfo
 */

type userInfoType = {
    accessToken : string;
    refreshToken: string;
    tokenType: string;
};

const setAuthorization = (userInfo: userInfoType | null) => {
    if (userInfo) {
        axios.defaults.headers.common[ACCESS_TOKEN] = BEARER_STRING + userInfo.accessToken;
        axios.defaults.headers.common[REFRESH_TOKEN] = BEARER_STRING + userInfo.refreshToken;
    } else {
        delete axios.defaults.headers.common[ACCESS_TOKEN];
        delete axios.defaults.headers.common[REFRESH_TOKEN];
    }

    axios.defaults.headers.post['Content-Type'] = 'application/json';

};

const getUserFromSession = () => {
    const user = sessionStorage.getItem(AUTH_SESSION_KEY);
    return user ? (typeof user == 'object' ? user : JSON.parse(user)) : null;
};

class APICore {
    /**
     * Fetches data from given url
     */
    get = (url: string, params: any) => {
        let response;
        if (params) {
            var queryString = params
                ? Object.keys(params)
                      .map((key) => key + '=' + params[key])
                      .join('&')
                : '';
            response = axios.get(`${url}?${queryString}`, params);
        } else {
            response = axios.get(`${url}`, params);
        }
        return response;
    };

    getFile = (url: string, params: any) => {
        let response;
        if (params) {
            var queryString = params
                ? Object.keys(params)
                      .map((key) => key + '=' + params[key])
                      .join('&')
                : '';
            response = axios.get(`${url}?${queryString}`, { responseType: 'blob' });
        } else {
            response = axios.get(`${url}`, { responseType: 'blob' });
        }
        return response;
    };

    getMultiple = (urls: string, params: any) => {
        const reqs = [];
        let queryString = '';
        if (params) {
            queryString = params
                ? Object.keys(params)
                      .map((key) => key + '=' + params[key])
                      .join('&')
                : '';
        }

        for (const url of urls) {
            reqs.push(axios.get(`${url}?${queryString}`));
        }
        return axios.all(reqs);
    };

    /**
     * post given data to url
     */
    create = (url: string, data: any) => {
        return axios.post(url, data);
    };

    /**
     * Updates patch data
     */
    updatePatch = (url: string, data: any) => {
        return axios.patch(url, data);
    };

    /**
     * Updates data
     */
    update = (url: string, data: any) => {
        return axios.put(url, data);
    };

    /**
     * Deletes data
     */
    delete = (url: string) => {
        return axios.delete(url);
    };

    /**
     * post given data to url with file
     */
    createWithFile = (url: string, data: any) => {
        const formData = new FormData();
        for (const k in data) {
            formData.append(k, data[k]);
        }

        const config: any = {
            headers: {
                ...axios.defaults.headers,
                'content-type': 'multipart/form-data',
            },
        };
        return axios.post(url, formData, config);
    };

    /**
     * post given data to url with file
     */
    updateWithFile = (url: string, data: any) => {
        const formData = new FormData();
        for (const k in data) {
            formData.append(k, data[k]);
        }

        const config: any = {
            headers: {
                ...axios.defaults.headers,
                'content-type': 'multipart/form-data',
            },
        };
        return axios.patch(url, formData, config);
    };

    isUserAuthenticated = () => {

        const user = this.getLoggedInUser();
        if (!user || (user && !user.accessToken)) {
            return false;
        }
        const decoded: any = jwtDecode(user.accessToken);
        const currentTime = Date.now() / 1000;
        // console.log("decode.exp : ", decoded.exp);
        // console.log("currentTime : ", currentTime);
        if (decoded.exp < currentTime) {
            console.warn('access token expired');
            // sessionStorage.clear();
        }
        return true;
    };

    // Login Logic
    setLoggedInUser = (session: any) => {
        // console.log("setLoggedInUser : ", session);
		if (session) {
            let decode : any = jwtDecode(session.accessToken);
            decode[ACCESS_TOKEN] = session.accessToken;
			sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(decode));
            sessionStorage.setItem(ACCESS_TOKEN, session.accessToken);
            sessionStorage.setItem(REFRESH_TOKEN, session.refreshToken);
            axios.defaults.headers.common[ACCESS_TOKEN] = BEARER_STRING + session.accessToken;
            axios.defaults.headers.common[REFRESH_TOKEN] = BEARER_STRING + session.refreshToken;
            sessionStorage.setItem('Login', 'TRUE');
		} 
        else {
            sessionStorage.removeItem(AUTH_SESSION_KEY);
        }
    };

    /**
     * Returns the logged in user
     */
    getLoggedInUser = () => {
        return getUserFromSession();
    };

    setUserInSession = (modifiedUser: any) => {
        let userInfo = sessionStorage.getItem(AUTH_SESSION_KEY);
        if (userInfo) {
            const { token, user } = JSON.parse(userInfo);
            this.setLoggedInUser({ token, ...user, ...modifiedUser });
        }
    };
}

/*
Check if token available in session
*/
let user = getUserFromSession();
if (user) {
    const { token } = user;
    if (token) {
        setAuthorization(token);
    }
}

export { APICore, setAuthorization };
