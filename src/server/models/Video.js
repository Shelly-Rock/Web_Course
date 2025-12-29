import { serverTimestamp } from "firebase/firestore";
export const createVideo = (data = {}) => ({
  title: data.title || "",
  description: data.description || "Học Lập Trình Cùng Thầy!",
  thumbnail: data.thumbnail || "",
  duration: data.duration || "",
  categoryId: data.categoryId ?? null,

  statistics: {
    views: data.statistics?.views ?? 0,
    likes: data.statistics?.likes ?? 0,
    comments: data.statistics?.comments ?? 0,
  },

  isDeleted: data.isDeleted ?? false,
  createdAt: serverTimestamp(),
  updatedAt: serverTimestamp(),
});
