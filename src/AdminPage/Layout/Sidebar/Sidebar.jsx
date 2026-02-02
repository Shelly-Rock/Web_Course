import {Link} from "react-router-dom";
export default function Sidebar(){
    return(
        <>
            <Link to="mon-hoc" className="sidebarAdmin-Items"><i className="bi bi-book"></i> Khóa Học</Link>
            <Link to="type-course" className="sidebarAdmin-Items"><i class="bi bi-grid"></i>Loại Khóa Học</Link>
        </>
    )
}