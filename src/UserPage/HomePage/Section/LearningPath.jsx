export default  function LearningPath(){
    return(
        <>
            <div className ="learningPath-title">
            <h1>Lộ TRÌNH HỌC TẬP</h1>
            <h2>Học Từ Cơ Bản Đến Nâng Cao</h2>
            
        </div>
        <div className="learningPath-timeline">
            <div className="timeline-line">
                <div className="timeline-dot top"></div>
                <div className="timeline-dot middle"></div>
                <div className="timeline-dot bottom"></div>
            </div>

            <div className="timeline-item leftContent top">
                <h3>Frontend Developer</h3>
                <p>Học các kiến thức từ cơ bản đến nâng cao về HTML, CSS, JavaScript...</p>
                <iframe
                    src="https://www.youtube.com/embed/Oz3Y2xuvmhQ"
                    allowFullScreen
                    style={{width: "87%",height:"300px",borderRadius:"10px"}}
                />
            </div>

            <div className="timeline-item rightContent middle">
                <h3>Backend Developer</h3>
                <p>Tìm hiểu về phát triển phía máy chủ với C#, Python...</p>
                <iframe
                    src="https://www.youtube.com/embed/tgG2BjygiAM"
                    allowFullScreen
                    style={{width: "87%",height:"300px",borderRadius:"10px"}}
                />
            </div>

            <div className="timeline-item leftContent bottom">
                <h3>Fullstack Developer</h3>
                <p>Kết hợp kiến thức frontend và backend để trở thành fullstack.</p>
                <iframe
                    src="https://www.youtube.com/embed/7hwegNKkq9k"
                    allowFullScreen
                    style={{width: "87%",height:"300px",borderRadius:"10px"}}
                />
            </div>
        </div>
        </>
    )
}