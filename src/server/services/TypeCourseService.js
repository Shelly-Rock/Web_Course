import {collection,addDoc,query,where,getDocs, orderBy,deleteDoc,doc, updateDoc, serverTimestamp} from "firebase/firestore";
import { db } from "../../firebase.js";
import {typeCourse} from "../models/TypeCourse.js";
export default class TypeCourseService{
    static async addTypeCourse(typeName){
        const q = query(
            collection(db,"typeCourse"),
            where("typeName","==",typeName),
            where("isDeleted","==",false)
        )
        const snapShot = await getDocs(q);
        if(!snapShot.empty){
            throw new Error("Loại khóa học đã tồn tại");
        }
        return  await addDoc(collection(db,"typeCourse"),typeCourse({typeName}));
    }
    static async getAllTypeCourse(){
        const q = query(
            collection(db,"typeCourse"),
            where("isDeleted","==",false),
            orderBy("createdAt","desc")
        )
        const snapShot = await getDocs(q);
        return snapShot.docs.map(doc  => ({
            id:doc.id,
            ...doc.data()
        }));
    }
    static async searchTypeCourse(keyword){
    const q = query(
            collection(db, "typeCourse"),
            where("isDeleted", "==", false),
            orderBy("typeName"),
            where("typeName", ">=", keyword),
            where("typeName", "<=", keyword + "\uf8ff")
        );

        const snapshot = await getDocs(q);

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    }
    static async deleteTypeCourse(id){
        return await deleteDoc(doc(db,"typeCourse",id));
    }
    static async updateTypeCourse(data){
        const typeCoureRef = doc(db,"typeCourse",data.id);
        return await updateDoc(typeCoureRef,{
            typeName:data.typeName,
            updatedAt:serverTimestamp()
        })
    }
}