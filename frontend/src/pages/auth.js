import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default class Authentication extends React.Component{
    render(){
        return(
            <div className="container h-100">
                <div style={{ paddingTop: '192px' }} className="h-100 d-flex justify-content-center">
                    <form className="form">
                        <div className="form-group">
                            <h3 className="text-center">Login</h3>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" name="username" id="" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="userpass" id="" />
                        </div>
                        <div className="form-group text-center">
                            <input className="btn btn-primary py-2 px-5 text-white" type="submit" value="login" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}