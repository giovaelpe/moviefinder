import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apikey = '960b9ccf';
const endpoint = "http://www.omdbapi.com/?apikey="+apikey+"&i=";

export const getMovieInfo = createAsyncThunk(
    "movie/showMovie",
    async(id) => {
        const response = await fetch(endpoint+id);
        const json = await response.json();
        return json;
    }
)

const movieSlice = createSlice({
    name: "movie",
    initialState : {
        movieLoading : false,
        movieError : false,
        movieData: {}
    },
    extraReducers : (builder) => {
        builder.addCase(getMovieInfo.pending, (state, action) => {
            state.movieLoading = true;
            state.movieError = false;
        })
        .addCase(getMovieInfo.fulfilled, (state, action) => {
            state.movieLoading = false;
            state.movieError = false;
            state.movieData = action.payload;
        })
        .addCase(getMovieInfo.rejected, (state, action) => {
            state.movieLoading = false;
            state.movieError = true;
        })
    }
});

export default movieSlice.reducer;