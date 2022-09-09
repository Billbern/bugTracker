import { useState } from "react";


export default function NewClientForm({setClient}) {

    const [data, setData] = useState({name: "", email: "", organisation: ""})
    
    function handleSubmission(e){
        e.preventDefault();
    }

    function handleChange(e){
        if(e.target.name === "client_name"){
            setData({
                ...data,
                name: e.target.value
            })
        }else if (e.target.name === "client_mail"){
            setData({
                ...data,
                email: e.target.value
            })
        }else if (e.target.name === "client_organ"){
            setData({
                ...data,
                organisation: e.target.value
            })
        }
    }

    return (
        <div style={{ position: "absolute" }} className="w-100 h-100 p-3">
            <div style={{ width: "100%", height: "100%", paddingTop: "64px", backgroundColor: "rgba(255, 255, 255, 0.3)" }} className="">
                <div className="mx-auto" style={{ position: 'relative', width: "80%", height: "100%", backgroundColor: "#fff", boxShadow: "2px 2px 6px #d9d9d9" }}>
                    <div className="w-100 px-5 py-3">
                        <h4 className="pb-3 ">Register A Client</h4>
                        <form className="form w-100" onSubmit={ (e)=> { handleSubmission(e) }}>
                            <div className="form-group w-100 mb-3">
                                <label className="mb-2" htmlFor="#name">Name <span style={{ color: "#cb4e68" }}>*</span></label><br />
                                <input className="w-50" type="text" name="client_name" id="name" value={data.name} onChange={(e)=>{ handleChange(e) }} required/>
                            </div>
                            <div className="form-group w-100 mb-3">
                                <label className="mb-2" htmlFor="#mail">Email <span style={{ color: "#cb4e68" }}>*</span></label><br />
                                <input className="w-50" type="text" name="client_mail" id="mail" value={data.email} onChange={(e)=>{ handleChange(e) }} required />
                            </div>
                            <div className="form-group w-100 mb-3">
                                <label className="mb-2" htmlFor="#organ">Organisation <span style={{ color: "#cb4e68" }}>*</span></label><br />
                                <input className="w-50" type="text" name="client_organ" id="organ" value={data.organisation} onChange={(e)=>{ handleChange(e) }} required />
                            </div>
                            <div className="form-group mt-3 d-flex flex-column gap-3 align-items-end">
                                <input type="button" value="cancel" className="btn btn-outline-secondary px-5" onClick={ ()=> {setClient()}}  />
                                <input type="submit" value="proceed" className="btn px-5" style={{ backgroundColor: "#cb4e68", color: "#fff" }} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}