import "./CategoryCourse.css";
import AddForm from "./component/formAdd/formAdd.jsx";
import CategoryService from "../../../server/services/CategoryService.js";
import { useState,useEffect,useCallback} from "react";
export default function CategoryCourse (){
    //state đóng mở form add
    const  [open,setOpen] = useState(false);
    const handleOnClickOpen = useCallback(()=>{
        setOpen(true);
    },[])
    const handleClose = useCallback(()=>{
        setOpen(false);
    },[])
    //state danh sách khóa học
    const [listCategories,setListCategories] = useState([]);
    useEffect(()=>{
        const fetchCategories = async () =>{
            try{
                const categories = await CategoryService.getAllCategories();
                setListCategories(categories);
            }catch(error){
                alert(error);
            }
        }
        fetchCategories();
    },[]);

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
                            <th>Ngày Tạo</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                            {listCategories.map((item,index) =>(
                                <tr key ={item.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{item.categoryName}</td>
                                    <td>{item.createdAt?.toDate().toLocaleDateString()}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning" style={{marginRight:"10px"}}>
                                            <i className="bi bi-pencil-square"></i> Sửa
                                        </button>
                                        <button className="btn btn-sm btn-danger">
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
