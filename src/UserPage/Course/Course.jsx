import "./Course.css";
import CardCourse from "./component/CardCousre/CardCourse.jsx";
import { Link } from 'react-router-dom';
import useCategory from "../../context/category/useCategory.js";
export default function Course(){
    const {categories} = useCategory();
    return(
            <div className ="container-course">   
                 <div className ="course-header">
                    <div className="course-header__icon">
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-js-square"></i>
                    </div>
                    <div className="course-header__title">
                        <h1>Khám Phá Khóa Học Của Bạn</h1>
                        <h3>Các video chất lượng từ giảng viên đại học có kinh nghiệm</h3>
                        <button className="btn-startStudy">Bắt đầu học</button>
                    </div>
                </div>     
                <div className="course-main">   
                    <div className="category-course">
                        {categories.map(category => (
                            <Link   
                                key={category.id}
                                to={`/courses?category=${category.id}`}
                                className="listCategories-item"
                            >
                                {category.categoryName}
                            </Link>
                            ))}
                    </div>
                    <div className ="course-video">
                            <CardCourse/>
                    </div>
                </div>            
            </div>
    )
}