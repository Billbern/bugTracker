import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/helperfunctions";

import Authentication from "./auth";
import ProtectedPages from "./protectedroute";


class Page extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return( 
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={ 
                        isAuthenticated ? 
                        <Navigate replace to="/dashboard" /> :
                        <Navigate replace to="/auth/login" /> } 
                    />
                    <Route exact path="/auth/login" element={ <Authentication/>} />
                    <Route path='/dashboard/*' element={ <ProtectedPages/> } />
                </Routes>    
            </BrowserRouter>   
        );
    }
}

const mapState = state =>{
    return {
        user: state.user
    }
}

export default connect(mapState, null)(Page)