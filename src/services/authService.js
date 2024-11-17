import {apiService} from "./apiService";
import {urls} from "../constants";

const accessTokenKey = 'access'
const refreshTokenKey = 'refresh'


const authService = {
    register(user) {
        return apiService.post(urls.auth.register, user)
    },

    me() {
        return apiService.get(urls.auth.me)
    },

    async login(user) {
        const {data} = await apiService.post(urls.auth.login, user);
        this.setTokens(data);
        const {data: me} = await this.me();
        return me
    },

    async refresh() {
        const refreshToken = this.getRefreshToken();
        const {data} = await apiService.post(urls.auth.refresh, {refresh:refreshToken});
        this.setTokens(data);
    },

    setTokens({access, refresh}) {
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },

    getAccessToken() {
        return localStorage.getItem(accessTokenKey)
    },

    getRefreshToken() {
        return localStorage.getItem(refreshTokenKey)
    },

    deleteTokens() {
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    }
}

export {
    authService
}