import React from "react"
import { connect } from "react-redux"
import HeaderComponent from "../components/headercomponent";
import ToolBarComponent from "../components/toolbarcomponent";
import ClientIssues from "../components/clientissuescomponent";
import IssueForm from "../components/issuesformcomponent";


class ClientPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="h-100" style={{ backgroundColor: "#f5f6f7", width: "calc( 100% - 320px)" }}>
                <HeaderComponent />
                <div style={{ position: "relative", height: "calc( 100% - 64px )", overflow: "hidden" }} className="w-100 d-flex flex-column">
                    <ToolBarComponent />
                    <div className="w-100 px-3">
                        <ClientIssues />
                    </div>
                    { this.props.issues.formOn ? <IssueForm/> : null }
                </div>
            </div>
        );
    }
}

const mapState = state => {
    return { issues: state.issues }
}

export default connect(mapState, null)(ClientPage);