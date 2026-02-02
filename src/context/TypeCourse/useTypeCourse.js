import { useContext } from "react";
import { TypeCourseContext } from "./TypeCourseContext";
export default function useTypeCourse(){
    const context = useContext(TypeCourseContext);
    if(!context){
        throw new Error("TypeCourse ko nằm trong Provider");
    }
    return context;
}