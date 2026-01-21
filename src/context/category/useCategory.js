import { useContext } from "react";
import { CategoryContext } from "./CategoryContext";

export default function useCategory() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory phải được dùng trong CategoryProvider");
  }
  return context;
}
