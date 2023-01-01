import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : "",
    reducers : {
        typing(state, action){
            return action.payload;
        }
    }
});

export const typing = searchSlice.actions.typing;
export default searchSlice.reducer;