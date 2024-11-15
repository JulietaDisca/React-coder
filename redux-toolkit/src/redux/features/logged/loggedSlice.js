import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logged: false,
};

export const loggedSlice = createSlice({
    name: "logged",
    initialState,
    reducers: {
        logInToggle: (state) => {
            state.logged = !state.logged;
        }
    }
})

export const { logInToggle } = loggedSlice.actions; //actions

export default loggedSlice.reducer; //reducer