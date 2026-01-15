import "./CategoryCourse.css";
import AddForm from "./component/formAdd/formAdd.jsx";
import { useState } from "react";
export default function CategoryCourse (){
    const  [open,setOpen] = useState(false);
    const handleOnClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };
    return(
        <>
           {open && <AddForm onClose={handleClose}/>}
           <div className ="contain-categoryCourse">
            <div className ="btn-categoryCourse">
                <p>Danh Sách Khóa Học</p>
                <button className="btn-categoryItem" onClick = {handleOnClickOpen}>+</button> 
            </div>
            <div className ="categoryCourse-listItem">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Khóa Học</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Lập trình C++</td>
                            <td>
                                <button className="btn btn-sm btn-warning" style={{marginRight:"10px"}}>
                                    <i className="bi bi-pencil-square"></i> Sửa
                                </button>
                                <button className="btn btn-sm btn-danger">
                                    <i className="bi bi-trash"></i> Xóa
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}