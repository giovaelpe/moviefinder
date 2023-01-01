import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apikey = '960b9ccf';
const endpoint = "http://www.omdbapi.com/?apikey="+apikey+"&s=";

export const movieSearch = createAsyncThunk(
    "result/search",
    async(arg) => {
        const response = await fetch(endpoint+arg);
        const json = await response.json();
        return json;
    }
)

const resultSlice = createSlice({
    name: "result",
    initialState: {
        searchResults : {},
        dataPending : false,
        dataLoaded : false,
        dataError : false
    },
    extraReducers : (builder) => {
        builder.addCase(movieSearch.pending, (state, action) => {
            state.dataPending = true;
            state.dataLoaded = false;
            state.dataError = false;
        })
        .addCase(movieSearch.fulfilled, (state, action) => {
            state.dataPending = false;
            state.searchResults = action.payload;
            state.dataLoaded = true;
            state.dataError = false;
        })
        .addCase(movieSearch.rejected, (state, action) => {
            state.dataPending = false;
            state.dataLoaded = false;
            state.dataError = true;
        })
    }
});

export default resultSlice.reducer;
