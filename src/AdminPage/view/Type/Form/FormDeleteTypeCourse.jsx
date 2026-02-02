import useTypeCourse from "../../../../context/TypeCourse/useTypeCourse"
import {toast} from "react-toastify"
export default function FormDeleteTypeCourse({data,onClose}){
    const {deleteTypeCourse} = useTypeCourse();
    const handleOnClick = async(e)=>{
        try{
            e.preventDefault();
            await deleteTypeCourse(data.id);
            toast.success("Xóa Thành Công!");
            onClose();
        }catch(error){
            toast.error(error.message || 'Có lỗi!')
        }
    }
    return (
        <div className ="form-overlay">
            <div className ="form-deleted">
                <p>Bạn có chắc chắn muốn xóa {data.typeName} không!</p>
                <div className ="btn-deleted">
                    <button className="btn-ok" onClick={handleOnClick}>OK</button>
                    <button className ="btn-cancle" onClick={onClose}>Cancle</button>
                </div>
            </div>
        </div>
    )
}