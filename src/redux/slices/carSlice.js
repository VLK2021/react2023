import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";



const getAll = createAsyncThunk(
    'carsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        }catch (e) {
            return rejectWithValue(e)
        }
    }
);

const initialState = {
    cars: []
}


const carsSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload.items
            })
});

const {reducer: carReducer, actions} = carsSlice;

const carActions = {
    ...actions,
    getAll
}

export {
    carActions,
    carReducer
}