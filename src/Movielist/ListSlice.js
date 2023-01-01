import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "list",
    initialState : [],
    reducers : {
        addItem(state, action){
            state.push(action.payload);
        },
        removeItem(state, action){
            return state.filter(item => item.id !== action.payload);
        },
        removeAll(state, action){
            return [];
        }
    }
})

export const {addItem, removeItem, removeAll} = listSlice.actions;
export default listSlice.reducer; 