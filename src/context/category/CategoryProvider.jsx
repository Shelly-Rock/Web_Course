  import { useCallback, useEffect, useState } from "react";
  import { CategoryContext } from "./CategoryContext";
  import CategoryService from "../../server/services/CategoryService";
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


    //hàm tìm kiếm theo tên
    const getCategoryByName = useCallback(async (categoryName) =>{
      if (!categoryName.trim()) {
          await getCategories();
          return;
      }
      try{
        const data = await CategoryService.getCategoryByName(categoryName);
        if(!data){
          throw new Error("Không tìm thấy category");
        }else{
          setCategories(data);
        }
      }catch(error){
        console.log(error);
      }
    },[getCategories]);


    //hàm thêm một category 
    const addCategory = async (data) => {
       await CategoryService.addCategory(data);
       await getCategories();
    };


    //hàm xóa một category
    const deleteCategory = async (id) => {
      await CategoryService.deleted(id);
      setCategories(prev => 
        prev.filter(category => category.id  !== id))
    }


    //hàm update
    const updateCategory = async (data) => {
      await CategoryService.update(data);
      await getCategories();
    };

    
    useEffect(() => { (
      async () => { 
        await getCategories(); })();
      },[getCategories]);

    return (
      <CategoryContext.Provider value={{ categories, getCategories, addCategory,deleteCategory,updateCategory,getCategoryByName }}>
        {children}
      </CategoryContext.Provider>
    );
  }
