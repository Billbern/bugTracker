import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import { logUser } from "../utils/reducers/usersSlice";
import { isAuthenticated } from "../utils/helperfunctions";


class Authentication extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: "",
            userpass: ""
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e){
        if (e.target.name === "username"){
            this.setState({
                ...this.state,
                username: e.target.value
            })
        }else if (e.target.name === "userpass"){
            this.setState({
                ...this.state,
                userpass: e.target.value
            })
        }
    }
    
    async handleFormSubmit(e){
        e.preventDefault();
        if(this.state.username && this.state.userpass){
            const data = {
                "username": this.state.username, 
                "userpass": this.state.userpass
            }
            const loginRequest = await axios.post("http://127.0.0.1:23556/auth/login", data)

            if(loginRequest.status === 200){
                const data = await loginRequest.data;
                localStorage.setItem("user", JSON.stringify({usertype: data.user.usertype, userId: data.user._id.toString(), firstlogin: data.user.firstlogin}));
                this.props.logUser({usertype: data.user.usertype, userId: data.user._id, firstlogin: data.user.firstlogin})
                document.cookie = `user=${data.user._id.toString()}; max-age=28800; SameSite=Lax; Secure`;
                window.location.reload(false)
            }
        }
    
    }

    render(){
        return(
            <>
                {
                    !isAuthenticated() ?
                    <div className="h-100">
                        <div className="h-100 d-flex justify-content-between">
                            <div className="h-100 w-25">
                                <div style={{ paddingTop: '192px' }} className="h-100 w-100 d-flex justify-content-center">
                                    <form  className="form w-75" onSubmit={(e)=> this.handleFormSubmit(e)}>
                                        <div className="form-group mb-5">
                                            <h1 style={{ color: "#172B4D" }} className="text-center">Login</h1>
                                        </div>
                                        <div className="form-group mb-3">
                                            <input className="form-control" type="text" name="username" id="uname" placeholder="username" onChange={(e)=> this.handleOnChange(e)} value={this.state.username} required/>
                                        </div>
                                        <div className="form-group mb-3">
                                            <input className="form-control" type="password" name="userpass" id="pword" placeholder="password" onChange={(e)=> this.handleOnChange(e)} value={this.state.userpass} required/>
                                        </div>
                                        <div className="form-group text-center mt-5">
                                            <input className="form-control btn btn-primary btn-lg text-white " type="submit" value="login" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div style={ { overflow: "hidden" } } className="h-100 w-75">
                                <img className="w-100 h-auto" src={require('../assets/bg_auth.png')} alt="tracking" />
                            </div>
                        </div>
                    </div>
                    :
                    <Navigate replace to="/dashboard" />
                }
            </>
        );
    }
}


const mapDispatch = dispatch =>{
    return {
        logUser: (data)=> dispatch(logUser(data))
    }
}

export default connect(null, mapDispatch)(Authentication)