import "./formDelete.css";
import useCategory from "../../../../../context/category/useCategory";
import {toast} from "react-toastify";
export default function FormDeleted({onClose}){
    const {deleteCategory} = useCategory();
    const handleOnClickOK = async () => {
        try{
            await deleteCategory(); 
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
                <p>Bạn có chắc chắn muốn xóa !</p>
                <div className ="btn-deleted">
                    <button className ="btn-cancle" onClick = {onClose}>Cancle</button>
                    <button className="btn-ok" onClick ={handleOnClickOK}>OK</button>
                </div>
            </div>
        </div>
    )
}