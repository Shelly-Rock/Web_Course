import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import HomePage from "./UserPage/HomePage/HomePage.jsx";
import Course from "./UserPage/Course/Course.jsx";
import CourseDetail from "./UserPage/CourseDetail/CourseDetail.jsx";
import Contact from "./UserPage/Contact/Contact.jsx";
import  MainLayoutAdmin from "./AdminPage/Layout/MainLayoutAdmin.jsx";
import HomePageAdmin from "./AdminPage/view/HomeAdmin.jsx";
import CategoryCourse from "./AdminPage/view/Category/CategoryCourse.jsx";
export default function Router() {
    return (
    <Routes>
      {/* user */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="courses" element={<Course />} />
            <Route path="contact" element={<Contact/>} />
          </Route>
      {/* admin */}
          <Route path="/admin" element ={<MainLayoutAdmin/>}>
            <Route index element ={<HomePageAdmin/>}></Route>
            <Route path="mon-hoc" element={<CategoryCourse/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
  