import { createSlice } from "@reduxjs/toolkit";


export const usersSlice = createSlice({
    name: 'users',
    initialState : {userType: "", loggedIn: false, userID: ""},
    reducers: {
        logUser: (state, action) =>{
            state.userType = action.payload.usertype;
            state.userID = action.payload.userId;
            state.loggedIn = !state.loggedIn;
        }
    }
})

export const { logUser } = usersSlice.actions;

export default usersSlice.reducer;