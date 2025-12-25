import "./HomePage.css";
import Banner from "./Section/Banner.jsx";
import IconScroll from "./Section/IconScroll.jsx";
import LearningPath from "./Section/LearningPath.jsx";
import Comment from "./Section/Comment.jsx";
export default function HomePage(){
    return(
        <div className="homepage-container"> 
            <Banner />
            <IconScroll />
            <LearningPath/>
            <Comment/>
        </div>
    );
}
