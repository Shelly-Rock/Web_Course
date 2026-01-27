import { collection, addDoc,deleteDoc, getDocs, query, where, orderBy,doc,updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.js";
import { category } from "../models/Category.js";
export default class CategoryService {
  static async addCategory(data) {
    const q = query(
      collection(db, "categories"),
      where("categoryName","==",data.categoryName),
      where("isDeleted", "==", false)
    );
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      throw new Error("Tên category đã tồn tại");
    }
    return await addDoc(
      collection(db, "categories"),
      category(data)
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
  //hàm get theo tên
    static async getCategoryByName(keyword) {
      const q = query(
        collection(db, "categories"),
        where("isDeleted", "==", false),
        orderBy("categoryName"),
        where("categoryName", ">=", keyword),
        where("categoryName", "<=", keyword + "\uf8ff")
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
    await updateDoc(categoryRef, {
      categoryName: data.categoryName,
      updatedAt: serverTimestamp(),
    });
    }
}
