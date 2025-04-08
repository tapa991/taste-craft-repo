import { useEffect } from "react";
import { firestore } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

const useUpdateProfilePic = () => {
  const updateProfilePic = async (imageUrl) => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    const userRef = doc(firestore, "users", userInfo.uid);

    try {
      await updateDoc(userRef, {
        imageUrl: imageUrl,
      });
      localStorage.setItem(
        "user-info",
        JSON.stringify({ ...userInfo, imageUrl: imageUrl })
      );
      console.log("Profile picture updated successfully!");
    } catch (error) {
      console.error("Error updating profile picture:", error);
    }
  };

  return { updateProfilePic };
};

export default useUpdateProfilePic;