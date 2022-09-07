import React from "react";
import HeaderComponent from "../components/headercomponent";
import ToolBarComponent from "../components/toolbarcomponent";


export default class AdminPage extends React.Component {
    render() {
        return (
            <div className="h-100" style={{ backgroundColor: "#f5f6f7", width: "calc( 100% - 320px)" }}>
                <HeaderComponent />
                <div className="w-100">
                    <ToolBarComponent />
                    <div className="w-100 px-3">

                    </div>
                </div>
            </div>
        );
    }
}