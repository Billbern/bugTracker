import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AdminPage from "./admin";
import ClientPage from "./client";
import Authentication from "./auth";


class Page extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return( 
            this.props.user.loggedIn === false && 
            !document.cookie.split("; ").find(
                item => item.startsWith("accesstoken")
            ) ?
                <Authentication/>
            :
                <div className="h-100">
                    <BrowserRouter>
                        {
                            this.props.user.userType === "admin" ?
                            <AdminPage /> :
                            <ClientPage />
                        }
                    </BrowserRouter>   
                </div>
        );
    }
}

const mapState = state =>{
    return {
        user: state.user
    }
}

export default connect(mapState, null)(Page)