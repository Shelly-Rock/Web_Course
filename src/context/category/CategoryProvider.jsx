import { useCallback, useEffect, useState } from "react";
import { CategoryContext } from "./CategoryContext";
import CategoryService from "../../server/services/CategoryService";
import { doc } from "firebase/firestore";

export function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);
  //hàm trả về đanh sấch categories
  const getCategories = useCallback(async () => {
    try {
      const data = await CategoryService.getAllCategories();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  //hàm thêm một category 
  const addCategory = async (data) => {
    const docRef = await CategoryService.addCategory(data);
    setCategories(prev => [
      { id: docRef.id, ...data },
      ...prev
    ]);
  };
  //hàm xóa một category
  const deleteCategory = async (id) => {
    await CategoryService.deleted(id);
    setCategories(prev => 
      prev.filter(category => category.id  !== id))
  }

  useEffect(() => { (
    async () => { 
      await getCategories(); })();
    },[getCategories]);

  return (
    <CategoryContext.Provider value={{ categories, getCategories, addCategory,deleteCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}
