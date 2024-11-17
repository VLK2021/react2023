import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";

import {authService} from "../../services";


const login = createAsyncThunk(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            return await authService.login(user)
        } catch (e) {
            return rejectWithValue(e)
        }
    }
);

const me = createAsyncThunk(
    'authSlice/me',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await authService.me();
            return data
        }catch (e) {
            return rejectWithValue(e)
        }
    }
);

const initialState = {
    me: null,
    error: null
}


const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},

    extraReducers: builder =>
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.me = action.payload
            })
            .addCase(me.fulfilled, (state, action) => {
                state.me = action.payload
            })
            .addMatcher(isRejected(login), state => {
                state.error = true
            })
            .addMatcher(isFulfilled(login), state => {
                state.error = false
            })

});

const {reducer: authReducer, actions} = authSlice;
const authActions = {
    ...actions,
    login,
    me
}

export {
    authReducer,
    authActions
}