import { serverTimestamp } from "firebase/firestore"
export   const typeCourse = (data = {}) => ({
    typeName : data.typeName || "",
    isDeleted : false,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
})