import { Typewriter } from "react-simple-typewriter";
export default function Banner(){
    return(
        <>
            <div className ="homepage-banner">
                <div className ="bannerLeft">
                    <h1>Học Lập Trình Miễn Phí Trên <span style ={{color:"rgba(212, 37, 37, 1)"}}>YouTube</span></h1>
                    <p>
                        <Typewriter
                        words={[
                            "Xin chào, mình là Hiến - giảng viên lập trình với 15 năm kinh nghiệm,7 năm làm Team Leader. Mình chia sẻ kiến thức lập trình hoàn toàn miễn phí để giúp mọi người theo đuổi đam mê công nghệ."
                        ]}
                        loop={1}
                        cursor
                        typeSpeed={40}
                        deleteSpeed={20}
                        delaySpeed={2000}
                    />
                    </p>
                    <div className="bannerHome-btn">
                        <button className="btn btn-primary">Bắt đầu học</button>
                        <p>Miễn Phí 100%</p>
                    </div>
                    
                </div>
                <div className="bannerRight">
                    <div className="video-wrapper">
                        <iframe
                        src="https://www.youtube.com/embed/jruvMHTJLj4"
                        className="videoBanner-frame"
                        allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </>
    );
}