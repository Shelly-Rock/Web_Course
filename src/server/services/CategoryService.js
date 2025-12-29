import { collection, addDoc, getDocs, query, where, orderBy  } from "firebase/firestore";
import { db } from "../../firebase.js";
import { createCategory } from "../models/Category.js";

export default class CategoryService {
  static async addCategory(data) {
    return await addDoc(
      collection(db, "categories"),
      createCategory(data)
    );
  }
  static async getCategory(){
    return
  }
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
}
