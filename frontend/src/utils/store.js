import { configureStore } from "@reduxjs/toolkit";
import clientsSlice from "./reducers/clientsSlice";


export default configureStore({
    reducer: {
        client: clientsSlice,
    }
})