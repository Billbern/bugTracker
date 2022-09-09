import { createSlice } from "@reduxjs/toolkit";


export const usersSlice = createSlice({
    name: 'users',
    initialState : {userType: "", loggedIn: false, userID: "", firstlogin: false},
    reducers: {
        logUser: (state, action) =>{
            state.userType = action.payload.usertype;
            state.userID = action.payload.userId;
            state.loggedIn = true;
            state.firstlogin = action.payload.firstlogin;
        },
        removeUser: (state, action) => {
            state.userType = "";
            state.userID = "";
            state.loggedIn = false;
            state.firstlogin = false;
        }
    }
})

export const { logUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;