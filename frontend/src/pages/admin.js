import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import HeaderComponent from "../components/headercomponent";
import SideBarComponent from "../components/sidebarcomponent";
import ClientDisplay from "../components/clientsdisplaycomponent";
import ProjectDisplay from "../components/projectsdisplaycomponent";
import { persistUser } from "../utils/helperfunctions";
import { logUser } from "../utils/reducers/usersSlice";
import SettingsComponent from "../components/settingscomponent";
import IssuesDisplay from "../components/issuesdisplaycomponent";

class AdminPage extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        persistUser(this.props)
    }

    render() {
        return (
            <div className="d-flex justify-content-between h-100">
                <SideBarComponent />
                <div className="h-100" style={{ backgroundColor: "#f5f6f7", width: "calc( 100% - 320px)" }}>
                    <HeaderComponent />
                    <Routes>
                        <Route index element={ <ClientDisplay/> } />
                        <Route path="clients" element={ <ClientDisplay/> } />
                        <Route path="projects" element={ <ProjectDisplay/> } />
                        <Route path="issues" element={ <IssuesDisplay/> } />
                        <Route path="settings" element={ <SettingsComponent/> } />
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapDispatch = dispatch => {
    return {
        logUser: (data)=> dispatch(logUser(data))
    }
}

export default connect(null, mapDispatch)(AdminPage);