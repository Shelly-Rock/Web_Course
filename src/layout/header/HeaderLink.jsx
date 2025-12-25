import { NavLink } from "react-router-dom";
export default function HeaderLinks() {
  return (
    <nav className="nav-links">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav__item active" : "nav__item"
        }
      >
        <i className="bi bi-house"></i> Trang chủ
      </NavLink>

      <a
        href="https://www.hcmue.io.vn/home"
        className="nav__item "
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-person-video3" style ={{color:"white",fontWeight:"bold"}}></i> Giảng viên
      </a>


      <NavLink
        to="courses"
        className={({ isActive }) =>
          isActive ? "nav__item active" : "nav__item"
        }
      >
        <i className="bi bi-mortarboard"></i> Khóa học
      </NavLink>
      
      <NavLink
        to="documents"
        className={({ isActive }) =>
          isActive ? "nav__item active" : "nav__item"
        }
      >
       <i className="bi bi-journal-text"></i> Tài liệu
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) =>
          isActive ? "nav__item active" : "nav__item"
        }
      >
        <i className="bi bi-telephone"></i> Liên hệ
      </NavLink>
    </nav>
  );
}


