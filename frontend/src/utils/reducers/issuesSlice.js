import { createSlice } from "@reduxjs/toolkit";


export const issuesSlice = createSlice({
    name: 'issues',
    initialState : { data: [], formOn: false},
    reducers: {
        addIssue: (state, action) =>{
            const newIssue = {
                id: '',
                title: action.payload.title,
                description: action.payload.description,
                screenshot: action.payload.screenshot,
                reporter: action.payload.reporter,
            }
            state.issues.push(newIssue);
        },
        toggleFormOn: (state, action)=>{
            state.formOn = !state.formOn
        },
        filterIssues: (state, action)=>{
            
        }
    }
})

export const { addIssue, toggleFormOn, filterIssues } = issuesSlice.actions;

export default issuesSlice.reducer;