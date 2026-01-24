import "./formDelete.css";
import useCategory from "../../../../../context/category/useCategory";
import {toast} from "react-toastify";
export default function FormDeleted({onClose,category}){
    const {deleteCategory} = useCategory();
    const handleOnClickOK = async (e) => {
        e.preventDefault();
        try{
            await deleteCategory(category.id); 
            toast.success("Xóa thành công !");
            onClose();
        }catch(error){
            toast.error("Xóa thất bại !");
            throw new Error(error);
        }
    }
    return(
        <div className ="form-overlay">
            <div className ="form-deleted">
                <p>Bạn có chắc chắn muốn xóa {category.categoryName} không!</p>
                <div className ="btn-deleted">
                    <button className ="btn-cancle" onClick = {onClose}>Cancle</button>
                    <button className="btn-ok" onClick ={handleOnClickOK}>OK</button>
                </div>
            </div>
        </div>
    )
}