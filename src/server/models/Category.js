import { serverTimestamp } from "firebase/firestore";

export const createCategory = (data = {}) => ({
  categoryName: data.categoryName || "",
  isDeleted: false,
  createdAt: serverTimestamp(),
  updatedAt: serverTimestamp(),
});
