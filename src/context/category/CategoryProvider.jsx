import { useCallback, useEffect, useState } from "react";
import { CategoryContext } from "./CategoryContext";
import CategoryService from "../../server/services/CategoryService";

export function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);

  const getCategories = useCallback(async () => {
    try {
      const data = await CategoryService.getAllCategories();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const addCategory = async (data) => {
    try {
      await CategoryService.addCategory(data);
      await getCategories();
    } catch (error) {
      console.error(error);
    }
  };
  const deleteCategory = async (data) => {
    try{
      await CategoryService.deleted(data);
      await getCategories();
    }catch(error){
      console.error(error);
    }
  }

  useEffect(() => { (async () => { await getCategories(); })(); }, [getCategories]);
  return (
    <CategoryContext.Provider value={{ categories, getCategories, addCategory,deleteCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}
