import Profile1 from "../../../assets/images/Comment/profile1.jpg";
import Profile2 from "../../../assets/images/Comment/profile2.jpg";
import Profile3 from "../../../assets/images/Comment/profile3.jpg";
import Profile4 from "../../../assets/images/Comment/profile4.jpg";
import Profile5 from "../../../assets/images/Comment/profile5.jpg";
import Profile6 from "../../../assets/images/Comment/profile6.jpg";
export default function Comment(){
    return(
        <>
            <div className ="homepage-comment">
                <h1>Các Bình Luận Trên Kênh</h1>
                <div className="Comment-Card">
                    <div className="Card-Item">
                        <div className="item-user">
                            <img src ={Profile1} alt ="Ảnh đại diện"/>
                            <p>@NguyễnVũPhiTrường</p>
                        </div>
                        <div className ="comment-content">
                            <p>Dạ ủng hộ thầy ạ! Em sẽ theo dõi series này ^^ Em cảm ơn thầy rất nhiều ạ!</p>
                        </div>
                    </div>
                    <div className="Card-Item">
                        <div className="item-user">
                            <img src ={Profile2} alt ="Ảnh đại diện"/>
                            <p>@anhtuanppoi8448</p>
                        </div>
                        <div className ="comment-content">
                            <p>Bắt đầu series bác Hien ơi, cám ơn thầy Online</p>
                        </div>
                    </div>
                    <div className="Card-Item">
                        <div className="item-user">
                            <img src ={Profile3} alt ="Ảnh đại diện"/>
                            <p>@TrietMinh-w3x</p>
                        </div>
                        <div className ="comment-content">
                            <p>rất dễ hiểu và mong rằng kênh thầy sẽ phát triển</p>
                        </div>
                    </div>        
                    <div className="Card-Item">
                        <div className="item-user">
                            <img src ={Profile4} alt ="Ảnh đại diện"/>
                            <p>@HàoNguyễnHữu-t5z</p>
                        </div>
                        <div className ="comment-content">
                            <p>hay quá thầy ơi</p>
                        </div>
                    </div> 
                    <div className="Card-Item">
                        <div className="item-user">
                            <img src ={Profile5} alt ="Ảnh đại diện"/>
                            <p>@phamquochuy2353</p>
                        </div>
                        <div className ="comment-content">
                            <p>Cảm ơn anh, hi vọng anh sẽ đem đến cho mn 1 series tuyệt vời ạ!</p>
                        </div>
                    </div>          
                    <div className="Card-Item">
                        <div className="item-user">
                            <img src ={Profile6} alt ="Ảnh đại diện"/>
                            <p>@mduy211</p>
                        </div>
                        <div className ="comment-content">
                            <p>Bài hướng dẫn rất chi tiết quá tuyệt vời mong kênh ra nhiều video tuyệt vời như thế này nữa-6878</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}