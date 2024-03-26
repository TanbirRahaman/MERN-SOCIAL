import {configureStore} from "@reduxjs/toolkit";
import { allUsersReducer, postOfFollowingReducer,userReducer } from "./Reducers/User";

// const intitialState={}
const store=configureStore({
    reducer:{
        user:userReducer,
        postOfFollowing: postOfFollowingReducer,
        allUsers:allUsersReducer,
    },
});

export default store;