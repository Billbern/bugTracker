import React from "react";
import Authentication from "./auth";

export default class Page extends React.Component{
    render(){
        return(
            <div className="h-100">
                <Authentication/>
            </div>
        );
    }
}