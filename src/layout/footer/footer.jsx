import LogoYoutube from "../../assets/images/Logo_Youtube.webp";
import FooterImg from "../../assets/images/FooterImg.jpg";
import "./footer.css";
export default function Footer(){
    return(
        <footer className ="container-footer">
            <div className="footer-left"><h3 style={{color:"pink"}}>© HIENLTH</h3></div>
            <div className="footer-center"></div>
            <div className="footer-right"><a href ="https://www.youtube.com/@HIENLTH/playlists"><img src ={LogoYoutube} alt ="Logo Youtube"/></a></div>
        </footer>
    )
}