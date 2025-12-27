import "./CardCourse.css";
import CourseCardImg from  "../../assets/images/CourseCard.jpg"; 
export default function CardCourse(){
    return(
        <>
            <div className  ="cardCourse">
                <div className ="course-img">
                    <img src  ={CourseCardImg} alt ="Hình Ảnh Khóa Học"/>
                </div>
                <div className  ="course-detail">
                    <p>Tiêu Đề Khóa Học</p>
                </div>
            </div>
        </>
    )
}