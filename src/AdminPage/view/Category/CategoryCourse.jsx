import "./CategoryCourse.css";
import AddForm from "./component/formAdd/formAdd.jsx";
import useCategory from "../../../context/category/useCategory.js";
import  useToggle from "../../../hooks/useToggle.js";
import FormDeleted from "./component/formDelete/formDelete.jsx";
import {useState} from "react";
export default function CategoryCourse (){
    const [data,setData] = useState({});
    const handleFormAdd = useToggle();
    const handleFormDeleted = useToggle();
    const { categories } = useCategory();
    return(
        <>
           {handleFormAdd.open && <AddForm onClose={handleFormAdd.handleClose} />}
           {handleFormDeleted.open && <FormDeleted onClose={handleFormDeleted.handleClose} category = {data} />}
           <div className ="contain-categoryCourse">
            <div className ="btn-categoryCourse">
                <p>Danh Sách Khóa Học</p>
                <button className="btn-categoryItem" onClick = {handleFormAdd.handleOpen}>+</button> 
            </div>
            <div className ="categoryCourse-listItem">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Khóa Học</th>
                            <th>Ngày Tạo</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                            {categories.map((item,index) =>(
                                <tr key ={item.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{item.categoryName}</td>
                                    <td>{item.createdAt?.toDate().toLocaleDateString()}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning" style={{marginRight:"10px"}}>
                                            <i className="bi bi-pencil-square"></i> Sửa
                                        </button> 
                                        <button className="btn btn-sm btn-danger" onClick={() => {setData(item); handleFormDeleted.handleOpen()}}>
                                            <i className="bi bi-trash"></i> Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
