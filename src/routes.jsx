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
        {/* <Route path="contact" element={<ContactPage />} />
        <Route path="courses" element={<Courses />} />
        <Route path="course/:id" element={<CourseDetail />} />
        <Route path="course/:id/:slug" element={<CourseDetail />} />
        <Route path="documents" element={<Documents />} />
        <Route path="document/:id" element={<DocumentDetail />} />
        <Route path="document/:id/:slug" element={<DocumentDetail />} /> */}
        <Route path="courses" element={<Course />} />
        {/* <Route path="course-detail" element={<CourseDetail />} /> */}
        <Route path="documents" element={<Document />} />
        <Route path="teachers" element={<Teacher />} />
        <Route path="contact" element={<Contact/>} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
  