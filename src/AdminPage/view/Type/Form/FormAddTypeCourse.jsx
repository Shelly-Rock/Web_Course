import {useState} from  "react";
import { toast } from "react-toastify";
import useTypeCourse from "../../../../context/TypeCourse/useTypeCourse";
export default function FormAddTypeCourse({onClose}){
  const {addTypeCourse} = useTypeCourse();
  const [typeName,setTypeName] = useState("");
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      if(!typeName){
        toast.error("Chưa Nhập!");
      }else{
        await addTypeCourse(typeName.trim().toUpperCase());
        toast.success("Thêm thành công!");
        setTypeName("");
      }
    }catch(error){
      toast.error(error.message || "Có lỗi !")
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
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên loại khóa học"
              value={typeName}
              onChange={(e) => setTypeName(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
              Thêm
          </button>
        </form>
    </div>
  )
}