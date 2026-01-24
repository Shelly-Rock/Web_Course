import { collection, addDoc,deleteDoc, getDocs, query, where, orderBy,doc,updateDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import { category } from "../models/Category.js";
export default class CategoryService {
  //hàm thêm 
  static async addCategory(data) {
    return await addDoc(
      collection(db, "categories"),category(data)
    );
  }
  //hàm get all
   static async getAllCategories() {
    const q = query(
      collection(db, "categories"),
      where("isDeleted", "==", false),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() 
    }));
  }
  //hàm delete
  static async deleted(id){
    return await deleteDoc(doc(db,"categories",id)
  )} 
  //hàm update
  static async update(data) {
    const categoryRef = doc(db, "categories", data.id);
    return await updateDoc(categoryRef, {
      categoryName: data.categoryName,
      updatedAt: new Date()
    });
  }
}
