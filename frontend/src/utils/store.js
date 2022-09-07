import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "./reducers/usersSlice";
import issuesSlice from "./reducers/issuesSlice";
import clientsSlice from "./reducers/clientsSlice";


export default configureStore({
    reducer: {
        client: clientsSlice,
        issues: issuesSlice,
        user: usersSlice,
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())