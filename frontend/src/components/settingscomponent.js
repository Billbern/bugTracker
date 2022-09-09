import { useState } from "react"

export default function  SettingsComponent(){

    const [editable, setEditable] = useState(false);
    const [data, setData] = useState({ username: "", password: "", newpassword: "", img: "" })

    function handleChange(e){
        if (editable === true){
            if (e.target.name === "username"){
                setData({
                    ...data,
                    username : e.target.value
                })
            }else if(e.target.name === "userpass"){
                setData({
                    ...data,
                    password : e.target.value
                })
            }else if(e.target.name === "newpass"){
                setData({
                    ...data,
                    newpassword : e.target.value
                })
            }
        }
    }
    function handleOnSubmit(e){
        e.preventDefault();
    }
    

    return(
        <div style={{ position: "relative", height: "calc( 100% - 64px )", overflow: "hidden" }} className="w-100 d-flex flex-column">
            <div className="w-100">
                <div className="d-flex flex-column align-items-center">
                    <h4>Edit Profile</h4>
                    <form onSubmit={(e)=>{ handleOnSubmit(e) }}>
                        <div className="w-100 d-flex flex-column">
                            <div className="d-flex justify-content-center pt-4 mb-5">
                                <div style={{ width: "128px", height: "128px", borderRadius: "50%", backgroundColor: "#d9d9d9", overflow: "hidden" }}>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div className="my-3">
                                <div className="d-flex justify-content-start mb-1">
                                    <label htmlFor="#username">Username</label> <br />
                                </div>
                                
                                <input style={{ border: "none", width: "320px", padding: " 7px 0 7px 4px" }} type="text" name="username" id="username" value={ data.username } onChange={ (e) => handleChange(e) } />
                                
                            </div>
                            <div className="my-3">
                                <div className="d-flex justify-content-start mb-1">
                                    <label htmlFor="#userpass">Password</label> <br />
                                </div>
                                <input style={{ border: "none", width: "320px", padding: " 7px 0 7px 4px" }} type="password" name="userpass" id="userpass" value={data.password} onChange={ (e) => handleChange(e) } />
                            </div>
                            {
                                editable === true ?

                                <div className="my-3">
                                    <div className="d-flex justify-content-start mb-1">
                                        <label htmlFor="#newpass">New password</label> <br />
                                    </div>
                                    <input style={{ border: "none", width: "320px", padding: " 7px 0 7px 4px" }} type="password" name="newpass" id="newpass" value={data.newpassword} onChange={ (e) => handleChange(e) } />
                                </div>: null
                            }
                            <div className="d-flex align-items-center gap-3 mt-5 pt-5">
                                {
                                    editable === true ?
                                    <input className="py-2 px-5" style={{ border: "none", color: "#fff", backgroundColor: "#cb4e68", width: "320px" }} type="submit" name="edit" value="update profile" />
                                    :

                                    <input className="py-2 px-5" style={{ border: "none", color: "#fff", backgroundColor: "#cb4e68", width: "320px" }} type="button" name="edit" value="edit profile"  onClick= { ()=>{ setEditable(!editable) } }/>

                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}