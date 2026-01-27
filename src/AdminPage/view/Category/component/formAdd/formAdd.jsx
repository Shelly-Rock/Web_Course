  import { useState } from "react";
  import "./formAdd.css";
  import {toast} from "react-toastify";
  import useCategory from "../../../../../context/category/useCategory.js";
  export default function AddForm({onClose}) {
    const {addCategory} = useCategory();
    const [courseName, setCourseName] = useState("");
    const handleSubmit = async (e) => {
      e.preventDefault(); 
      try{
        if(!courseName){
          toast.error('Chưa nhập!')
        }else{
          await addCategory({categoryName:courseName.trim().toUpperCase()});
          toast.success("Thêm thành công !");
          setCourseName("");
        }
      }catch(error){
        toast.error(error.message || "Có lỗi!");
      }
    } 
    return (
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
              placeholder="Nhập tên khóa học"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Thêm khóa học
          </button>
        </form>
      </div>
    );
  }
