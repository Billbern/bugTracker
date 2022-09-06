import React from "react";
import AdminPage from "./admin";
import ClientPage from "./client";
import Authentication from "./auth";


export default class Page extends React.Component{
    render(){
        return(
            <div className="h-100">
                {/* <Authentication/> */}
                <ClientPage/>
                {/* <AdminPage/> */}
            </div>
        );
    }
}