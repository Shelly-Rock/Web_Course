import "./Course.css";
import CardCourse from "./component/CardCousre/CardCourse.jsx";
import { Link } from 'react-router-dom';
import {useState} from "react";
import useCategory from "../../context/category/useCategory.js";
import useScroll from "../../hooks/useScoll.js";
export default function Course(){
    const {categories} = useCategory();
    const {show,ref} = useScroll();
    const [hideHero, setHideHero] = useState(false);
    const handleOnClick =() =>{
        setHideHero(true);
        ref.current?.scrollIntoView({behavior:"smooth"});
    }
    return(
            <div className ="container-course">   
                 <div className={`course-header ${hideHero ? "hide" : ""}`}>
                    <div className="course-header__icon">
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-js-square"></i>
                    </div>
                    <div className="course-header__title">
                        <h1>Khám Phá Khóa Học Của Bạn</h1>
                        <h3>Các video chất lượng từ giảng viên đại học có kinh nghiệm</h3>
                        <button className="btn-startStudy" onClick={handleOnClick}>Bắt đầu học</button>
                    </div>
                </div>     
                <div className="course-main">   
                   <div className="category-course" ref={ref}>
                    {categories.map((item) => (
                        <div className={`category-item ${show ? "show" : ""}`}>
                        {item.categoryName}
                        </div>
                    ))}
                    </div>

                    <div className ="course-main__content">
                        <div className ="course-main__content-sidebar">
                            <p>Frontend</p>
                            <p>Backend</p>
                            <p>DataBase</p>
                        </div>
                        <div className ="course-main__content-cardVideo">
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
                </div>            
            </div>
    )
}