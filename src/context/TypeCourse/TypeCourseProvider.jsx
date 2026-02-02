import {TypeCourseContext} from "./TypeCourseContext.js";
import {useState, useCallback, useEffect } from  "react";
import TypeCourseService from "../../server/services/TypeCourseService";
export default function TypeCourseProvider({children}){
    const [typeCourses,setTypeCourses] = useState([]);
    const getAllTypeCourse =  useCallback(async () =>{
            const data = await TypeCourseService.getAllTypeCourse();
            setTypeCourses(data);
    },[]);
    const addTypeCourse = async (typeName) =>{
        await TypeCourseService.addTypeCourse(typeName);
        await getAllTypeCourse()
    };
    const deleteTypeCourse = async (id) =>{
        await TypeCourseService.deleteTypeCourse(id);
        await getAllTypeCourse()
    }
    const updateTypeCourse = async (data) =>{
        await TypeCourseService.updateTypeCourse(data);
        await getAllTypeCourse();
    }
    const searchTypeCourse = useCallback(async (typeName) => {
    if (!typeName.trim()) {
        await getAllTypeCourse();
        return;
    }
    try {
        const data = await TypeCourseService.searchTypeCourse(typeName);
        if (!data) {
        throw new Error("Không tìm thấy type");
        }
        setTypeCourses(data);
    } catch (error) {
        console.log(error);
    }
    }, [getAllTypeCourse]);

    useEffect(() =>{(
        async () =>{
            await getAllTypeCourse();
        }
    )()},[getAllTypeCourse])
    return(
        <TypeCourseContext.Provider value={{typeCourses,getAllTypeCourse,addTypeCourse,deleteTypeCourse,updateTypeCourse,searchTypeCourse}}>
            {children}
        </TypeCourseContext.Provider>
    )

}