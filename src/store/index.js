import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0 }

const counterReducer = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers:{
        increment(state){
            state.counter = state.counter + 1;
        },
        decrement(state){
            state.counter = state.counter - 1;
        },
    }
});

const store = configureStore({
    reducer: counterReducer.reducer,
});

export const counterActions = counterReducer.actions;

export default store;