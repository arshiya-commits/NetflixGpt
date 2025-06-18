import {configureStore} from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import movieseducer from './movieSlice';
import gptReducer from './GptSlice'
import langReducer from './configSlice'
const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            movies:movieseducer,
            gpt:gptReducer,
            lang:langReducer,
        },
    }
)
export default appStore;