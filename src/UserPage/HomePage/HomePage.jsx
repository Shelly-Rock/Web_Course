import "./HomePage.css";
export default function HomePage(){
    return(
        <>
            <div className ="homepage-container">
                <div className ="homepage-banner">
                    <div className ="bannerLeft">
                        <h1>Học Lập Trình Miễn Phí Trên YouTube</h1>
                        <h2>Xin chào, mình là Hiến - giảng viên lập trình với 8 năm kinh nghiệm. Mình chia sẻ kiến thức lập trình hoàn toàn miễn phí để giúp mọi người theo đuổi đam mê công nghệ.</h2>
                    </div>
                    <div className="bannerRight">
                        <div className="video-wrapper">
                            <iframe
                            src="https://www.youtube.com/embed/jruvMHTJLj4"
                            className="videoBanner-frame"
                            allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}