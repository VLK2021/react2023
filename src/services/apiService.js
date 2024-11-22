import axios from "axios";

import {baseURL, urls} from "../constants";
import {authService} from "./authService";
import {router} from "../router";


const apiService = axios.create({baseURL});

let isRefreshing = false
const waitList = []

apiService.interceptors.request.use(req => {
    const accessToken = authService.getAccessToken();

    if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`
    }

    return req
});

apiService.interceptors.response.use(
    res => {
        return res
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401) {
            if (!isRefreshing) {
                isRefreshing = true
                try {
                    await authService.refresh()
                    runAfterRefresh()
                    isRefreshing = false
                    return apiService(originalRequest)
                } catch (e) {
                    authService.deleteTokens()
                    isRefreshing = false
                    router.navigate('/login?SessionExpired=true')
                    return Promise.reject(error)
                }
            }
            if (originalRequest.url === urls.auth.refresh) {
                return Promise.reject(error)
            }

            return new Promise(resolve => {
                subscribeToWaitList(()=> {
                    resolve(apiService(originalRequest))
                })
            })
        }
        return Promise.reject(error)
    }
)

const subscribeToWaitList = (cb) => {
    waitList.push(cb)
}

const runAfterRefresh = () => {
    while (waitList.length) {
        const cb = waitList.pop();
        cb()
    }
}

export {
    apiService
}