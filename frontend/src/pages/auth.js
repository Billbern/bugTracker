import React from "react";


export default class Authentication extends React.Component{
    render(){
        return(
            <div className="h-100">
                <div className="h-100 d-flex justify-content-between">
                    <div className="h-100 w-25">
                        <div style={{ paddingTop: '192px' }} className="h-100 w-100 d-flex justify-content-center">
                            <form  className="form w-75">
                                <div className="form-group mb-5">
                                    <h1 className="text-center">Login</h1>
                                </div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="text" name="username" id="" placeholder="username" required/>
                                </div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="password" name="userpass" id="" placeholder="password" required/>
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
        );
    }
}