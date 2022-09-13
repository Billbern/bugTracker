import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removeUser } from "../utils/reducers/usersSlice";


export default function HeaderComponent() {
    const [menu, setMenu] = useState(false);
    const dispatch = useDispatch();
    const locate = useNavigate();

    function toggleMenu(){
        return setMenu(!menu);
    }

    async function handlelogout(){
        const logout = await axios.get("http://127.0.0.1:23556/auth/logout")
        if(logout.status === 200){
            const cookie = document.cookie.split('; ').find((row) => row.startsWith('user'));
            if(cookie){
                document.cookie = "user=''; expires=Fri, 31 Dec 1999 23:59:59 GMT; SameSite=None; Secure";
            }
            localStorage.removeItem("user");
            dispatch(removeUser);
            locate('/auth/login');
        }
    }

    return (
        <div>
            <div style={{ backgroundColor: "#fff", boxShadow: "0px 2px 4px #d9d9d91a", position: "relative" }} className="d-flex justify-content-between p-3">
                <div style={{ backgroundColor: "#dfd9e2", borderRadius: "8px" }} className="d-flex align-items-center">
                    <label htmlFor="#search" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 487.95 487.95"><path d="M481.8 453.2l-140-140.1C369.4 280 386 237.7 386 191.5 386 86.1 299.5.4 193.1.4S0 86.2 0 191.6C0 297 86.5 382.7 192.9 382.7c45.2 0 86.8-15.5 119.8-41.4l140.5 140.5c8.2 8.2 20.4 8.2 28.6 0 8.2-8.2 8.2-20.4 0-28.6zM41 191.6c0-82.8 68.2-150.1 151.9-150.1s151.9 67.3 151.9 150.1-68.2 150.1-151.9 150.1S41 274.3 41 191.6z" fill="#57405f" /></svg>
                    </label>
                    <input className="form-group ps-2" style={{ border: 'none', outline: 'none', backgroundColor: "transparent" }} type="text" name="search" id="search" placeholder="Search" />
                </div>
                <div>
                    <div onClick={ ()=> { toggleMenu() } } style={{ width: '36px', height: "36px", borderRadius: "50%", backgroundColor: "#d9d9d9", cursor: "pointer" }} >
                    </div>
                </div>
                {
                    menu === true ?
                    <div style={{ position: "absolute", top: "54px", right: "16px", zIndex: "55", backgroundColor: "#fff", boxShadow: "0px 2px 12px  rgba(0,0,0,0.25" }}>
                        <ul className="px-2 pt-2" style={{ listStyle: "none"}}>
                            <li className="py-2 px-3" style={{ cursor: "pointer", borderBottom: "1px solid #d9d9d9" }}>
                                <Link to="settings" style={{ textDecoration: "none", color: "#000" }}>
                                    settings
                                </Link>
                            </li>
                            <li className="py-2 px-3" style={{ cursor: "pointer" }}>
                                <button onClick={()=>{handlelogout()}} style={{ backgroundColor: "transparent", border: "none" }}>logout</button>
                            </li>
                        </ul>
                    </div>: null
                }
            </div>
        </div>
    )
}