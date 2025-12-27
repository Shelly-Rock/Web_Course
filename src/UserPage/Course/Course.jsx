import "./Course.css";
import CardCourse from "../../component/CardCousre/CardCourse.jsx";
import { Link } from 'react-router-dom';
export default function Course(){
    return(
        <>
            <div className ="course-header">
                <h1>Danh Sách Các Khóa Học</h1>
            </div>
                <div className ="course-page-container">
                    <div className ="course_sideBar">
                        <div className ="sideBar-ListCourse">
                            <Link to="" className ="listCourse-item">C#</Link>
                            <Link to="" className ="listCourse-item">React</Link>
                            <Link to="" className ="listCourse-item">Python</Link>
                            <Link to="" className ="listCourse-item">HTML</Link>
                            <Link to="" className ="listCourse-item">CSS</Link>
                            <Link to="" className ="listCourse-item">JS</Link>
                        </div>
                    </div>
                    <div className ="course_video">
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                    </div>
                </div>
        </>
    )
}