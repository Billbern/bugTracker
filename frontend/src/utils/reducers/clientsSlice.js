import { createSlice } from "@reduxjs/toolkit";


export const clientsSlice = createSlice({
    name: 'clients',
    initialState : [],
    reducers: {
        addClient: (state, action) =>{
            const newClient = {
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

export const { addClient } = clientsSlice.actions;

export default clientsSlice.reducer;