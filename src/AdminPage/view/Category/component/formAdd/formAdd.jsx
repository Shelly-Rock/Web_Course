import { useState } from "react";
import "./formAdd.css";
import CategoryService from "../../../../../server/services/CategoryService";
import {toast} from "react-toastify";
export default function AddForm({onClose}) {
  const [courseName, setCourseName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try{
      await CategoryService.addCategory({categoryName:courseName});
      toast.success("Thêm thành công !");
      setCourseName("");
    }catch(error){
      toast.error("Thêm thất bại" + error);
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
