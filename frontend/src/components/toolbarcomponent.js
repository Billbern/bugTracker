import { useDispatch } from 'react-redux'
import { toggleFormOn } from "../utils/reducers/issuesSlice";


export default function ToolBarComponent() {

    const dispatch = useDispatch();

    return (
        <div className="d-flex justify-content-between py-3 px-3">
            <div className="d-flex align-items-center py-1 mt-3">
                <span className="d-flex px-3 py-1" style={{ border: "1px solid #4c3853", color: "#4c3853" }}>
                    Total: <span>0</span>
                </span>
            </div>
            <div className="d-flex align-items-center py-1 mt-3">
                <span className="me-3">
                    Filter
                    <span className="ms-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="14" viewBox="0 0 512 512"><path fill="#4c3853" d="M223.217 393.196c18.096 18.096 45.732 18.096 63.861 0l.787-.918 211.251-210.334c17.179-18.096 17.179-45.634 0-63.73-18.096-17.309-45.731-17.309-63.73 0L255.214 299.208 75.826 119.919c-17.178-17.178-45.731-17.178-62.942 0-17.179 17.31-17.179 45.732 0 62.943z" /></svg>
                    </span>
                </span>
                <input type="button" value="create" className="btn px-3" style={{ backgroundColor: "#cb4e68", color: "#fff" }} onClick={()=>{dispatch(toggleFormOn())}}/>
            </div>
        </div>
    )
}