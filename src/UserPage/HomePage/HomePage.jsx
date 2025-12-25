import "./HomePage.css";
import Banner from "./Section/Banner.jsx";
import IconScroll from "./Section/IconScroll.jsx";
import LearningPath from "./Section/LearningPath.jsx";
import Comment from "./Section/Comment.jsx";
import ProtofileYoutube from "../../assets/images/ProtofileYoutube.png";
export default function HomePage(){
    return(
        <div className="homepage-container"> 
            <Banner />
            <IconScroll />
            <LearningPath/>
            <Comment/>
            <div className ="homepage-listCardCourse">
                <h1>Nâng Cao Kỹ Năng Lập Trình Của Bạn</h1> 
                <h3>Cho dù bạn đang tìm kiếm cơ hội chuyển sang sự nghiệp trong lĩnh vực công nghệ hay muốn thăng tiến trong vai trò hiện tại, các khóa học của tôi sẽ cung cấp cho bạn kiến thức và kinh nghiệm cần thiết để thành công.</h3>
                <img src ={ProtofileYoutube}/>
            </div>
        </div>
    );
}
