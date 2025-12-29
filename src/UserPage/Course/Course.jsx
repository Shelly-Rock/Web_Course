import "./Course.css";
import CardCourse from "../../component/CardCousre/CardCourse.jsx";
import { Link } from 'react-router-dom';
import CategoryService from "../../server/services/CategoryService.js";
export default function Course(){
    const [categories, setCategories] = useState([]);
        useEffect(() => {
            const fetchCategories = async () => {
            const data = await CategoryService.getAllCategories();
            setCategories(data);
            };

            fetchCategories();
        }, []);
    return(
        <>
            <div className ="course-header">
                <h1>Danh Sách Các Khóa Học</h1>
            </div>
                <div className ="course-page-container">
                    <div className ="course_sideBar">
                        <div className ="sideBar-ListCourse">
                           {categories.map(category => (
                            <Link
                                key={category.id}
                                to={`/courses?category=${category.id}`}
                                className="listCourse-item"
                            >
                                {category.categoryName}
                            </Link>
                            ))}
                        </div>
                    </div>
                    <div className ="course_video">
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
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
        </>
    )
}