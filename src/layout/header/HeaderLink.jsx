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

      <NavLink
        to="/teachers"
        className={({ isActive }) =>
          isActive ? "nav__item active" : "nav__item"
        }
      >
       <i className="bi bi-person-video3"></i> Giảng viên
      </NavLink>

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


