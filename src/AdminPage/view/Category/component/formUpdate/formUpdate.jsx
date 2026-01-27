import {useState} from "react";
import useCategory from "../../../../../context/category/useCategory";
import { toast } from "react-toastify";
export default function FormUpdate({category,onClose}){
    const {updateCategory} = useCategory();
    const [courseName,setCourseName] = useState(category.categoryName);
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await updateCategory({id:category.id,categoryName:courseName});
            toast.success("Sửa thành công!");
        }catch(error){
            toast.error("Sửa thất bại" + error);
        }
    }
    return(
        <div className ="form-overlay">
            <form onSubmit={handleSubmit}>
                <button
                    type="button"
                    className="btn-close-form"
                    onClick={onClose}
                >
                    ✕
                </button>
                <div className ="form-input">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder={courseName}
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                    />
                </div>
                 <button type="submit" className="btn btn-success">
                    Update
                </button>
            </form>
        </div>
    )
}