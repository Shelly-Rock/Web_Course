import Search from "../../../component/Search/Search";
import useTypeCourse from "../../../context/TypeCourse/useTypeCourse.js";
import FormAddTypeCourse from "./Form/FormAddTypeCourse.jsx";
import useToggle from "../../../hooks/useToggle.js";
import FormDeleteTypeCourse from "./Form/FormDeleteTypeCourse.jsx";
import FormUpdateTypeCourse from "./Form/FormUpdateTypeCourse.jsx";
import { useState } from "react";
import "./TypeCourse.css";
export default function TypeCourse(){
    const{typeCourses,searchTypeCourse} = useTypeCourse();
    const handleFormAdd = useToggle();
    const handleFormDelete = useToggle();
    const handleFormUpdate = useToggle();
    const [data,setData] = useState(null);
    const [keyword, setKeyword] = useState("");
    return(
        <>
        {handleFormAdd.open && <FormAddTypeCourse onClose ={handleFormAdd.handleClose}/>}
        {handleFormDelete.open && <FormDeleteTypeCourse onClose = {handleFormDelete.handleClose} data={data}/>}
        {handleFormUpdate.open && <FormUpdateTypeCourse onClose ={handleFormUpdate.handleClose} data ={data}/>}
        <div className  ="container-typeCourse">
            <div className  ="typeCourse-header">
                 <p>Danh sách Loại Khóa Học</p>
                 <div className="typeCourse-header__btn">
                    <Search value ={keyword} onChange={setKeyword} onSubmit={searchTypeCourse}/>
                    <p onClick={handleFormAdd.handleOpen}>+</p>
                 </div>
            </div>
            <div className ="typeCourse-main">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Loại Khóa Học</th>
                            <th>Ngày Tạo</th>
                            <th>Ngày Cập Nhật</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {typeCourses.length === 0 ?
                        (<tr style={{background:"transparent"}}>
                                <td className="data-null">
                                    Không có dữ liệu
                                </td>
                        </tr>)
                        :(typeCourses.map((item,index)=>(
                            <tr key ={item.id || index}>
                                <td>{index}</td>
                                <td>{item.typeName}</td>
                                <td>{item.createdAt?.toDate().toLocaleDateString()}</td>
                                <td>{item.updatedAt?.toDate().toLocaleDateString()}</td>
                                 <td>
                                        <button className="btn btn-sm btn-warning" style={{marginRight:"10px"}} 
                                                onClick ={() => {setData(item);handleFormUpdate.handleOpen()}}>
                                            <i className="bi bi-pencil-square"></i> Sửa
                                        </button> 
                                        <button className="btn btn-sm btn-danger" onClick ={() =>{setData(item);handleFormDelete.handleOpen()}}>
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