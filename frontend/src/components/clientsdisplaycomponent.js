import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../utils/helperfunctions";
import NewClientForm from "./newclientformcomponent";

import ToolBarComponent from "./toolbarcomponent";


export default function ClientDisplay() {

    const data = useSelector((state)=> state.clients)
    const dispatch = useDispatch();

    const [client, setClient] = useState(false);

    useEffect(()=>{
        handledata().then()
        
    })

    function  handleNewClient( ){
        setClient(!client)
    }

    async function handledata(){
        const clients = await fetchData('client');
    }

    return (
        <div style={{ position: "relative", height: "calc( 100% - 64px )", overflow: "hidden" }} className="w-100 d-flex flex-column">
            <ToolBarComponent setClient={handleNewClient} />
            <div className="w-100 px-3">
                <table className="w-100">
                    <thead className="w-100">
                        <tr style={{ backgroundColor: "#dfd9e2", color: "#4c3853" }} >
                            <th className="py-2" style={{ width: "10%", paddingLeft: "16px" }}>id</th>
                            <th className="py-2" style={{ width: "15%", textAlign: "center" }}>name</th>
                            <th className="py-2" style={{ width: "15%", textAlign: "center" }}>assigned project</th>
                            <th className="py-2" style={{ width: "20%", textAlign: "center" }}>email</th>
                            <th className="py-2" style={{ width: "20%", textAlign: "center" }}>organisation</th>
                            <th className="py-2" style={{ width: "20%", textAlign: "right", paddingRight: "16px" }}>actions</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
            { client === true ? <NewClientForm setClient={ handleNewClient } /> : null }
        </div>
    )
}