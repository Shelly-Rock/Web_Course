import { useState } from "react";
import "./formAdd.css";
export default function AddForm({onClose}) {
  const [courseName, setCourseName] = useState("");
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="form-overlay">
      <form>
           {/* <form onSubmit={handleSubmit}></form> */}
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
