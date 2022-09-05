import React from "react"

export default class ClientPage extends React.Component{
    render(){

        return(
            <div className="h-100">
                <div className="d-flex justify-content-between h-100">
                    <div style={{ backgroundColor: "#3b183f", width: "320px" }} className="h-100 d-flex flex-column flex-shrink-0">
                        <div>
                            <div style={{ backgroundColor: "#281530" }} className="d-flex justify-content-between py-3 px-3">
                                <div className="d-flex gap-2 align-items-center">
                                    <h3 style={{ color: "#cb4e68" }} className="m-0">IssueTracker</h3>
                                </div>
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="24" viewBox="0 0 512 482.427"><path d="M274.842 105.792a6.317 6.317 0 00-6.317 6.318v363.989c0 3.748 3.25 6.707 6.977 6.286 52.412-5.94 97.799-35.387 125.332-77.512l11.965-23.97a32.754 32.754 0 004.243 3.12l34.553 21.274.604 61.186a15.953 15.953 0 0016.15 15.833l5.79-.056a15.96 15.96 0 0015.837-16.15l-.567-57.04c.28-.364.547-.739.79-1.135l.94-1.522c5.226-8.488.207-21.003-11.25-28.058l-43.041-26.499c-3.884-2.39-7.99-3.818-11.93-4.358a173.016 173.016 0 003.988-35.596h63.928c10.464.001 18.949-8.483 18.949-18.949 0-10.465-8.486-18.95-18.951-18.95h-63.91v-44.36h26.01c13.456 0 24.29-8.025 24.29-17.993v-1.79c0-.465-.031-.925-.077-1.38l30.385-48.275a15.96 15.96 0 00-5.018-22.055l-4.9-3.085a15.951 15.951 0 00-22.054 5.016l-32.595 51.786h-16.041v-40.42c0-25.214-20.44-45.654-45.653-45.654H274.842zM135.337 88.625h244.702c6.677 0 10.858-7.218 7.55-13.017-57.455-100.77-202.3-100.85-259.801 0-3.309 5.8.872 13.017 7.55 13.017zm-6.824 17.167c-25.213 0-45.652 20.441-45.652 45.655v42.42H67.295L34.7 142.078a15.951 15.951 0 00-22.052-5.015l-4.9 3.085a15.96 15.96 0 00-5.018 22.055l30.386 48.274c-.046.456-.078.916-.078 1.38v1.79c0 9.969 10.833 17.993 24.29 17.993H82.86v42.361H18.952C8.485 274.002 0 282.487 0 292.953c0 10.466 8.485 18.951 18.951 18.951h63.926a172.975 172.975 0 003.984 35.577c-5.721-.82-12.449.58-18.612 4.375l-43.042 26.499c-11.458 7.055-16.476 19.57-11.25 28.058l.94 1.522c.243.396.511.77.79 1.135l-.564 57.04a15.958 15.958 0 0015.835 16.15l5.79.056a15.953 15.953 0 0016.15-15.833l.604-61.186 34.553-21.275c3.514-2.164 6.417-4.845 8.609-7.762l14.285 28.613c27.533 42.125 72.919 71.574 125.33 77.514 3.725.422 6.977-2.537 6.977-6.287V112.11a6.315 6.315 0 00-6.316-6.317H128.513z" fill="#d9d9d9"/></svg>
                                </div>
                            </div>
                        </div>
                        <div className="pt-3">
                            <div className="">
                                <ul style={{ listStyle: "none" }} className="ps-3 mt-3">
                                    <li>
                                        <div style={{ color: "#d9d9d9",backgroundColor: "#cb4e68", borderRadius: "8px 0 0 8px", fontWeight: "500" }} className="d-flex align-items-center py-2 px-3">
                                            <span className="me-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="14px" viewBox="0 0 24 24"><path fill="#d9d9d9" d="M12.466 0c-4.135 0-7.5 3.364-7.5 7.5h3c0-2.481 2.02-4.5 4.5-4.5 2.481 0 4.5 2.019 4.5 4.5 0 1.603-.68 2.197-2.221 3.382-.573.442-1.22.94-1.84 1.558-1.967 1.966-1.946 3.906-1.939 4.06v3h3v-3.014c0-.036.035-.901 1.06-1.926.48-.48 1.024-.897 1.547-1.3 1.59-1.224 3.393-2.61 3.393-5.76 0-4.136-3.364-7.5-7.5-7.5zm-1.5 21h3v3h-3z"/></svg>
                                            </span>
                                            Issues
                                        </div>
                                    </li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="h-100" style={{ backgroundColor: "#f5f6f7", width: "calc( 100% - 320px)" }}>
                        <div>
                            <div style={{ backgroundColor: "#fff", boxShadow: "" }} className="d-flex justify-content-between p-3">
                                <div style={{ backgroundColor: "#dfd9e2", border: "1px solid #000", borderRadius: "8px" }} className="d-flex align-items-center">
                                    <label htmlFor="#search">
                                        
                                    </label>
                                    <input style={{ border: 'none', outline: 'none', backgroundColor: "transparent" }} type="text" name="search" id="search" placeholder="" />
                                </div>
                                <div>
                                    <div style={{ width: '32px', height: "32px", borderRadius: "50%", backgroundColor: "#d9d9d9" }} >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}