import {Link} from "react-router-dom";
import "./Sidebar.css";
export default function Sidebar(){
    return(
        <>
            <Link to="mon-hoc" className="sidebarAdmin-Items"><i className="bi bi-book"></i> Khóa Học</Link>
        </>
    )
}