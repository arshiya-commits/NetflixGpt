import { createSlice } from "@reduxjs/toolkit"

const movieSlice=createSlice({

    name:"movies",
    initialState:{
        getNowplaying:null,
        trailerVideo:null,
        getPopular: null,
        getUpcoming: null, 
        getTrending:null
    },
    reducers:{
       addNowplaying:(state,action)=>{
        state.getNowplaying=action.payload;

       },
       addTrailerVideo:(state,action)=>{
          state.trailerVideo=action.payload;
       },
       addPopular:(state,action)=>{
        state.getPopular=action.payload;

       },
       addUpComing:(state,action)=>{
        state.getUpComing=action.payload;

       },
       addTrending:(state,action)=>{
        state.getTrending=action.payload;
       }
    }
});
export const {addNowplaying,addTrailerVideo,addPopular,addUpComing,addTrending}=movieSlice.actions;
export default movieSlice.reducer