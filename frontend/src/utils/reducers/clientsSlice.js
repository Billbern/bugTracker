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
        },
        toggleArchive: (state, action)=>{
            const client = state.find(todo => todo.id === action.payload)
            if(client){
                client.archived = !client.archived
            }
        }
    }
})

export const { addClient, toggleArchive } = clientsSlice.actions;

export default clientsSlice.reducer;