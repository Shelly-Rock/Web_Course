import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import HomePage from "./UserPage/HomePage/HomePage.jsx";
import Course from "./UserPage/Course/Course.jsx";
import CourseDetail from "./UserPage/CourseDetail/CourseDetail.jsx";
import Document from "./UserPage/Document/Document.jsx";
import Teacher from "./UserPage/Teacher/Teacher.jsx";
import Contact from "./UserPage/Contact/Contact.jsx";
export default function Router() {
    return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<Course />} />
        <Route path="contact" element={<Contact/>} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
  