import { useState } from "react";
import useTypeCourse from "../../../../context/TypeCourse/useTypeCourse";
import {toast} from "react-toastify";
export default function FormUpdateTypeCourse({onClose,data}){
    const [typeName,setTypeName] = useState(data?.typeName || "");
    const {updateTypeCourse} = useTypeCourse();
    const handleSubmit = async(e) => {
        try{
            e.preventDefault();
            await updateTypeCourse({id:data.id,typeName:typeName});
            toast.success("Sửa thành công!")
            onClose();
        }catch(error){
            toast.error(error.message || "Có lỗi!")
        }
    }
    return(
        <div className="form-overlay">
            <form onSubmit={handleSubmit}>
                <button
                    type="button"
                    className="btn-close-form"
                    onClick={onClose}
                >
                    ✕
                </button>
                <div className="form-input">
                    <input className="form-control" 
                            type="text" 
                            placeholder= {typeName}
                            value ={typeName}
                            onChange={(e) => setTypeName(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Update
                </button>
            </form>
        </div>
    )
}