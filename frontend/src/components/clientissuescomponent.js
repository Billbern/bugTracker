export default function IssuesDisplay() {
    return (
        <table className="w-100">
            <thead className="w-100">
                <tr style={{ backgroundColor: "#dfd9e2", color: "#4c3853" }} >
                    <th className="py-2" style={{ width: "10%", paddingLeft: "16px" }}>id</th>
                    <th className="py-2" style={{ width: "20%", textAlign: "center" }}>title</th>
                    <th className="py-2" style={{ width: "20%", textAlign: "center" }}>screenshot</th>
                    <th className="py-2" style={{ width: "30%", textAlign: "center" }}>description</th>
                    <th className="py-2" style={{ width: "20%", textAlign: "right", paddingRight: "16px" }}>actions</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    )
}