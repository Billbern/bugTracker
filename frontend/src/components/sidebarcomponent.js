import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import { getLocation } from '../utils/helperfunctions';

export default function SideBarComponent() {
    const usertype = useSelector((state)=> state.user.userType)
    return (
        <div style={{ backgroundColor: "#3b183f", width: "320px" }} className="h-100 d-flex flex-column flex-shrink-0">
            <div>
                <div style={{ backgroundColor: "#281530" }} className="d-flex justify-content-between py-3 px-3">
                    <div className="d-flex gap-2 align-items-center">
                        <h3 style={{ color: "#cb4e68" }} className="m-0">IssueTracker</h3>
                    </div>
                    <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="24" viewBox="0 0 512 482.427"><path d="M274.842 105.792a6.317 6.317 0 00-6.317 6.318v363.989c0 3.748 3.25 6.707 6.977 6.286 52.412-5.94 97.799-35.387 125.332-77.512l11.965-23.97a32.754 32.754 0 004.243 3.12l34.553 21.274.604 61.186a15.953 15.953 0 0016.15 15.833l5.79-.056a15.96 15.96 0 0015.837-16.15l-.567-57.04c.28-.364.547-.739.79-1.135l.94-1.522c5.226-8.488.207-21.003-11.25-28.058l-43.041-26.499c-3.884-2.39-7.99-3.818-11.93-4.358a173.016 173.016 0 003.988-35.596h63.928c10.464.001 18.949-8.483 18.949-18.949 0-10.465-8.486-18.95-18.951-18.95h-63.91v-44.36h26.01c13.456 0 24.29-8.025 24.29-17.993v-1.79c0-.465-.031-.925-.077-1.38l30.385-48.275a15.96 15.96 0 00-5.018-22.055l-4.9-3.085a15.951 15.951 0 00-22.054 5.016l-32.595 51.786h-16.041v-40.42c0-25.214-20.44-45.654-45.653-45.654H274.842zM135.337 88.625h244.702c6.677 0 10.858-7.218 7.55-13.017-57.455-100.77-202.3-100.85-259.801 0-3.309 5.8.872 13.017 7.55 13.017zm-6.824 17.167c-25.213 0-45.652 20.441-45.652 45.655v42.42H67.295L34.7 142.078a15.951 15.951 0 00-22.052-5.015l-4.9 3.085a15.96 15.96 0 00-5.018 22.055l30.386 48.274c-.046.456-.078.916-.078 1.38v1.79c0 9.969 10.833 17.993 24.29 17.993H82.86v42.361H18.952C8.485 274.002 0 282.487 0 292.953c0 10.466 8.485 18.951 18.951 18.951h63.926a172.975 172.975 0 003.984 35.577c-5.721-.82-12.449.58-18.612 4.375l-43.042 26.499c-11.458 7.055-16.476 19.57-11.25 28.058l.94 1.522c.243.396.511.77.79 1.135l-.564 57.04a15.958 15.958 0 0015.835 16.15l5.79.056a15.953 15.953 0 0016.15-15.833l.604-61.186 34.553-21.275c3.514-2.164 6.417-4.845 8.609-7.762l14.285 28.613c27.533 42.125 72.919 71.574 125.33 77.514 3.725.422 6.977-2.537 6.977-6.287V112.11a6.315 6.315 0 00-6.316-6.317H128.513z" fill="#d9d9d9" /></svg>
                    </div>
                </div>
            </div>
            <div className="pt-3">
                <div className="">
                    <ul style={{ listStyle: "none" }} className="ps-3 mt-3">
                        { usertype === "admin" ?
                            <>
                                <li className='mb-3'>
                                    <NavLink to="clients" style={{ textDecoration: "none" }} className={ ({ isActive }) => isActive | getLocation('dashboard') === "" ? "linkActive": "linkNormal"  }>
                                        <div style={{ borderRadius: "8px 0 0 8px", fontWeight: "500" }} className="d-flex align-items-center py-2 px-3">
                                            <span className="me-2 pb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox='0 0 128 128' ><g><g  ><circle cx="64" cy="33" r="31"   /><path d="M64 66c-18.2 0-33-14.8-33-33S45.8 0 64 0s33 14.8 33 33-14.8 33-33 33zm0-62C48 4 35 17 35 33s13 29 29 29 29-13 29-29S80 4 64 4z"  /></g><path d="M126 126c0-34.2-27.8-62-62-62S2 91.8 2 126h124z"  /><path d="M126 128H2c-1.1 0-2-.9-2-2 0-25.9 15.5-48.3 37.7-58.3 8-3.6 17-5.7 26.3-5.7 6.6 0 13 1 19 2.9 26 8.1 45 32.4 45 61.1 0 1.1-.9 2-2 2zM4 124h120c-.6-19.4-10.5-36.4-25.3-46.9-6.1-4.4-13.1-7.6-20.6-9.4C73.5 66.6 68.8 66 64 66c-5.9 0-11.6.9-17 2.4-5 1.5-9.7 3.6-14 6.2C16.2 84.8 4.7 103.1 4 124z"  /></g></svg>
                                            </span>
                                            <span>Clients</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className='mb-3'>
                                    <NavLink to="projects" style={{ textDecoration: "none" }} className={ ({ isActive }) => isActive ? "linkActive": "linkNormal"  }>
                                        <div style={{ borderRadius: "8px 0 0 8px", fontWeight: "500" }} className="d-flex align-items-center py-2 px-3">
                                            <span className="me-2 pb-1">
                                                <svg width="14px" height="14px" xmlns="http://www.w3.org/2000/svg" viewBox='0 0 512 512'><path d="M139.61 35.5a12 12 0 00-17 0L58.93 98.81l-22.7-22.12a12 12 0 00-17 0L3.53 92.41a12 12 0 000 17l47.59 47.4a12.78 12.78 0 0017.61 0l15.59-15.62L156.52 69a12.09 12.09 0 00.09-17zm0 159.19a12 12 0 00-17 0l-63.68 63.72-22.7-22.1a12 12 0 00-17 0L3.53 252a12 12 0 000 17L51 316.5a12.77 12.77 0 0017.6 0l15.7-15.69 72.2-72.22a12 12 0 00.09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 000-96zm432 16H208a16 16 0 00-16 16v32a16 16 0 0016 16h288a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-320H208a16 16 0 00-16 16v32a16 16 0 0016 16h288a16 16 0 0016-16V80a16 16 0 00-16-16zm0 160H208a16 16 0 00-16 16v32a16 16 0 0016 16h288a16 16 0 0016-16v-32a16 16 0 00-16-16z"/></svg>
                                            </span>
                                            <span>Projects</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className='mb-3'>
                                    <NavLink to="issues" style={{ textDecoration: "none" }} className={ ({ isActive }) => isActive ? "linkActive": "linkNormal"  }>
                                        <div style={{ borderRadius: "8px 0 0 8px", fontWeight: "500" }} className="d-flex align-items-center py-2 px-3">
                                            <span className="me-2 pb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 48 48"><path d="M24.021 0L24 .001 23.979 0C10.737 0 0 10.745 0 24c0 13.254 10.737 24 23.979 24h.042C37.263 48 48 37.254 48 24c.001-13.255-10.736-24-23.979-24zm0 41.13L24 41.127l-.021.001a3.925 3.928 0 110-7.854h.042a3.925 3.928 0 110 7.854zm5.629-29.936c-.257 3.92-2.047 15.578-2.047 15.578 0 1.966-1.61 3.558-3.573 3.558h-.062c-1.963 0-3.572-1.594-3.572-3.558 0 0-1.79-11.658-2.046-15.578-.127-1.962 1.375-5.606 5.62-5.606h.06c4.243 0 5.748 3.644 5.62 5.606z"  /></svg>
                                            </span>
                                            <span>Issues</span>
                                        </div>
                                    </NavLink>
                                </li>
                            </> :
                            <li className='mb-3'>
                                <NavLink to="issues" style={{ textDecoration: "none" }} className={ ({ isActive }) => isActive | getLocation('dashboard') === "" ? "linkActive": "linkNormal"  }>
                                    <div style={{ borderRadius: "8px 0 0 8px", fontWeight: "500" }} className="d-flex align-items-center py-2 px-3">
                                        <span className="me-2 pb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 48 48"><path d="M24.021 0L24 .001 23.979 0C10.737 0 0 10.745 0 24c0 13.254 10.737 24 23.979 24h.042C37.263 48 48 37.254 48 24c.001-13.255-10.736-24-23.979-24zm0 41.13L24 41.127l-.021.001a3.925 3.928 0 110-7.854h.042a3.925 3.928 0 110 7.854zm5.629-29.936c-.257 3.92-2.047 15.578-2.047 15.578 0 1.966-1.61 3.558-3.573 3.558h-.062c-1.963 0-3.572-1.594-3.572-3.558 0 0-1.79-11.658-2.046-15.578-.127-1.962 1.375-5.606 5.62-5.606h.06c4.243 0 5.748 3.644 5.62 5.606z"  /></svg>
                                        </span>
                                        <span>Issues</span>
                                    </div>
                                </NavLink>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}