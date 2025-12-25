import "./HomePage.css";
import Banner from "./Section/Banner";
import IconScroll from "./Section/IconScroll";
export default function HomePage(){
    return(
        <div>
            <div className ="homepage-container"> 
                <Banner />
                <IconScroll />

                <div className ="homepage-learningPath">
                    <div className ="learningPath-title">
                        <h1>Lộ trình học tập</h1>
                        <h2>Học từ cơ bản đến nâng cao với lộ trình rõ ràng </h2>
                    </div>
                    <div class="timeline">
                        <div class="timeline-line"></div>
                        <div class="timeline-dot top"></div>
                        <div class="timeline-dot middle"></div>
                        <div class="timeline-dot bottom"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}