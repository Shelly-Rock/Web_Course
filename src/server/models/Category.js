import { serverTimestamp } from "firebase/firestore";

export const category = (
  data = {}) => ({
    categoryName: data.categoryName || "",
    isDeleted: false,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
});
