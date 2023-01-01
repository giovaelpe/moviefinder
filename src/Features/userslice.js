import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState : {
        logged : false,
        username : ""
    },
    reducers : {
        logIn(state, action){
            state.logged = true;
            state.username = action.payload;
        },
        logOut(state, action){
            return {
                logged : false,
                username: ""
            }
        }
    }
});

export const {logIn, logOut} = userSlice.actions;
export default userSlice.reducer;