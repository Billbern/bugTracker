import { useState } from "react";
import axios from 'axios';

import { uploader } from "../utils/helperfunctions";


// handle issues reported by client
export default function IssueForm({setComplain}) {
    
    const [data, setData] = useState({title: "", description: ""})
    const [file, setFile] = useState()

    // send form data to backend
    async function handleSubmission(e){
        e.preventDefault();
        let screenshot = ''
        
        if(data.title && data.description){
            if(file){
                const uploadFile = await uploader(file);
                if (uploadFile){
                    screenshot = uploadFile;
                }
            }

            const sendIssue = await axios.post('http://127.0.0.1:23556/auth/login', {title: data.title, description: data.description, screenshot: screenshot})

            if (sendIssue.status == 200){
                setComplain();
            }

        }
    }

    // handle data change in inputs
    function handleChange(e){
        if(e.target.name === "issue_title"){
            setData({
                ...data,
                title: e.target.value
            })
        }else if (e.target.name === "issue_descr"){
            setData({
                ...data,
                description: e.target.value
            })
        }else if (e.target.name === "screenshot"){
            setFile(e.target.files[0])
        }
    }

    return (
        <div style={{ position: "absolute" }} className="w-100 h-100 p-3">
            <div style={{ width: "100%", height: "100%", paddingTop: "64px", backgroundColor: "rgba(255, 255, 255, 0.3)" }} className="">
                <div className="mx-auto" style={{ position: 'relative', width: "80%", height: "100%", backgroundColor: "#fff", boxShadow: "2px 2px 6px #d9d9d9" }}>
                    <div className="w-100 px-5 py-3">
                        <h4 className="pb-3 ">Report an issue</h4>
                        <form className="form w-100" onSubmit={(e)=>{handleSubmission(e)}}>
                            <div className="form-group w-100 mb-3">
                                <label className="mb-2" htmlFor="#title">Title <span style={{ color: "#cb4e68" }}>*</span></label><br />
                                <input className="w-50" type="text" name="issue_title" id="title" value={data.title} onChange={(e)=> {handleChange(e)}} required />
                            </div>
                            <div className="form-group w-100 mb-3">
                                <label className="mb-2" htmlFor="#descr">Description <span style={{ color: "#cb4e68" }}>*</span></label><br />
                                <textarea name="issue_descr" id="descr" cols="102" rows="12" value={data.description} onChange={(e)=> {handleChange(e)}} required></textarea>
                            </div>
                            <div className="form-group w-100 mb-3">
                                <label className="mb-2" htmlFor="#screenshot">Add a screenshot</label><br />
                                <input type="file" name="screenshot" id="screenshot" onChange={ (e)=> {handleChange(e)} } />
                            </div>
                            <div className="form-group mt-3 d-flex flex-column gap-3 align-items-end">
                                <input type="button" value="cancel" className="btn btn-outline-secondary px-5" onClick={ ()=> {setComplain()}}  />
                                <input type="submit" value="report" className="btn px-5" style={{ backgroundColor: "#cb4e68", color: "#fff" }} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}