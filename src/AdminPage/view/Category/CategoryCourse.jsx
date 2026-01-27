import "./CategoryCourse.css";
import useCategory from "../../../context/category/useCategory.js";
import  useToggle from "../../../hooks/useToggle.js";
import AddForm from "./component/formAdd/formAdd.jsx";
import FormUpdate from "./component/formUpdate/formUpdate.jsx";
import FormDeleted from "./component/formDelete/formDelete.jsx";
import Search from "../../../component/Search/Search.jsx";
import {useState} from "react";
export default function CategoryCourse (){
    const [data,setData] = useState({});
    const handleFormAdd = useToggle();
    const handleFormDeleted = useToggle();
    const handleFormUpdate = useToggle();
    const { categories,getCategoryByName } = useCategory();
    const [keyword, setKeyword] = useState("");
    return(
        <>
           {handleFormAdd.open && <AddForm onClose={handleFormAdd.handleClose} />}
           {handleFormDeleted.open && <FormDeleted onClose={handleFormDeleted.handleClose} category = {data} />}
           {handleFormUpdate.open && <FormUpdate onClose={handleFormUpdate.handleClose} category ={data}/>}
           <div className ="contain-categoryCourse">
            <div className ="categoryCourse-header">
                <p>Danh Sách Khóa Học</p>
                <div className="categoryCourse-header__btn">
                    <Search value={keyword} onChange={setKeyword}  onSubmit={getCategoryByName}/>
                    <p onClick = {handleFormAdd.handleOpen}>+</p> 
                </div>
            </div>
            <div className ="categoryCourse-listItem">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Khóa Học</th>
                            <th>Ngày Tạo</th>
                            <th>Ngày Cập Nhật</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length === 0 ? 
                            (<tr style={{background:"transparent"}}>
                                <td className="data-null">
                                    Không có dữ liệu
                                </td>
                            </tr>)
                             :
                            (categories.map((item,index) =>(
                                <tr key ={item.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{item.categoryName}</td>
                                    <td>{item.createdAt?.toDate().toLocaleDateString()}</td>
                                    <td>{item.updatedAt?.toDate().toLocaleDateString()}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning" style={{marginRight:"10px"}}  onClick ={() => {setData(item); handleFormUpdate.handleOpen()}}>
                                            <i className="bi bi-pencil-square"></i> Sửa
                                        </button> 
                                        <button className="btn btn-sm btn-danger" onClick={() => {setData(item); handleFormDeleted.handleOpen()}}>
                                            <i className="bi bi-trash"></i> Xóa
                                        </button>
                                    </td>
                                </tr>
                            )))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
