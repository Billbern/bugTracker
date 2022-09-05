import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'issues',
    initialState : {},
    reducers: {
        addIssue: (state, action) =>{
            const newIssue = {
                id: '',
                name: '',
                email: action.payload.email,
                organisation: '',
                issues: action.payload.issues,
                archived: false
            }
            state.push(newClient);
        }
    }
})

export const { addClient, toggleArchive } = userSlice.actions;

export default userSlice.reducer;