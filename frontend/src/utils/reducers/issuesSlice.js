import { createSlice } from "@reduxjs/toolkit";


export const issuesSlice = createSlice({
    name: 'issues',
    initialState : [],
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
        },
        toggleArchive: (state, action)=>{
            const client = state.find(todo => todo.id === action.payload)
            if(client){
                client.archived = !client.archived
            }
        }
    }
})

export const { addClient, toggleArchive } = issuesSlice.actions;

export default issuesSlice.reducer;