import { createSlice } from "@reduxjs/toolkit";


export const usersSlice = createSlice({
    name: 'users',
    initialState : {userType: "", loggedIn: false, userID: ""},
    reducers: {
        logUser: (state, action) =>{
            
        }
    }
})

export const { logUser } = usersSlice.actions;

export default usersSlice.reducer;