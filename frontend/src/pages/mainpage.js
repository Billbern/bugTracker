import React from "react";
import AdminPage from "./admin";
import ClientPage from "./client";
import Authentication from "./auth";
import SideBarComponent from "../components/sidebarcomponent";
import { connect } from "react-redux";


class Page extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return( 
            this.props.user.loggedIn === false && !localStorage.getItem("user") ?
                <Authentication/>
            :
                <div className="h-100">
                    <div className="d-flex justify-content-between h-100">
                        <SideBarComponent />
                        {
                            this.props.user.userType === "admin" ?
                            <AdminPage /> :
                            <ClientPage />
                        }
                    </div>
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