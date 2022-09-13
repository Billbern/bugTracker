import { Component } from "react";
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";

import AdminPage from "./admin";
import ClientPage from "./client";
import { isAuthenticated, persistUser } from "../utils/helperfunctions";
import { logUser } from "../utils/reducers/usersSlice";


class ProtectedPages extends Component{

    componentDidMount(){
        persistUser(this.props)
    }

    render(){
        return(
            <>
            {
                isAuthenticated() ? 
                    this.props.user.userType === "admin" ?
                        <AdminPage /> :
                        <ClientPage />
                    :
                    <Navigate replace to='/auth/login' />
            }
            </>
        )
    }
}

const mapState = state =>{
    return {
        user: state.user
    }
}

const mapDispatch = dispatch =>{
    return {
        logUser: (data) => dispatch(logUser(data))
    }
}

export default connect(mapState, mapDispatch)(ProtectedPages)