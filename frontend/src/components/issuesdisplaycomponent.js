import React, { useState } from "react";

import ToolBarComponent from "./toolbarcomponent";


export default function ClientIssuesDisplay() {

    return (
        <div style={{ position: "relative", height: "calc( 100% - 64px )", overflow: "hidden" }} className="w-100 d-flex flex-column">
            <ToolBarComponent />
            <div className="w-100 px-3">
                <table className="w-100">
                    <thead className="w-100">
                        <tr style={{ backgroundColor: "#dfd9e2", color: "#4c3853" }} >
                            <th className="py-2" style={{ width: "10%", paddingLeft: "16px" }}>id</th>
                            <th className="py-2" style={{ width: "20%", textAlign: "center" }}>title</th>
                            <th className="py-2" style={{ width: "20%", textAlign: "center" }}>project</th>
                            <th className="py-2" style={{ width: "15%", textAlign: "center" }}>reporter</th>
                            <th className="py-2" style={{ width: "15%", textAlign: "center" }}>issue type</th>
                            <th className="py-2" style={{ width: "20%", textAlign: "right", paddingRight: "16px" }}>actions</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>

        </div>
    )
}