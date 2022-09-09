

export default function IssueForm({setComplain}) {
    

    return (
        <div style={{ position: "absolute" }} className="w-100 h-100 p-3">
            <div style={{ width: "100%", height: "100%", paddingTop: "64px", backgroundColor: "rgba(255, 255, 255, 0.3)" }} className="">
                <div className="mx-auto" style={{ position: 'relative', width: "80%", height: "100%", backgroundColor: "#fff", boxShadow: "2px 2px 6px #d9d9d9" }}>
                    <div className="w-100 px-5 py-3">
                        <h4 className="pb-3 ">Report an issue</h4>
                        <form className="form w-100">
                            <div className="form-group w-100 mb-3">
                                <label className="mb-2" htmlFor="#title">Title <span style={{ color: "#cb4e68" }}>*</span></label><br />
                                <input className="w-50" type="text" name="issue_title" id="title" required />
                            </div>
                            <div className="form-group w-100 mb-3">
                                <label className="mb-2" htmlFor="#descr">Description <span style={{ color: "#cb4e68" }}>*</span></label><br />
                                <textarea name="issue_descr" id="descr" cols="102" rows="12" required></textarea>
                            </div>
                            <div className="form-group w-100 mb-3">
                                <label className="mb-2" htmlFor="#screenshot">Add a screenshot</label><br />
                                <input type="file" name="screenshot" id="screenshot" />
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