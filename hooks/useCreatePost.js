import { useState } from "react";
import { firestore } from "../firebase"
import { addDoc, arrayUnion, collection, doc, updateDoc } from "firebase/firestore";

function useCreatePost() {
    const [isLoading, setIsLoading] = useState(false);
    const uid = JSON.parse(localStorage.getItem("user-info")).uid;

    const handleCreatePost = async (title, description, instructions, ingredients, imageUrl) => {
        if (isLoading) return;

        setIsLoading(true);

        const newPost = {
            title: title,
            description: description,
            instructions: instructions,
            ingredients: ingredients,
            imageUrl: imageUrl,
            createdAt: Date.now(),
            createdBy: uid,
        };

        try {
            const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
            const userDocRef = doc(firestore, "users", uid);

            await updateDoc(userDocRef, {posts: arrayUnion(postDocRef.id)});
            await updateDoc(postDocRef, {id: postDocRef.id});
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    };

    return {isLoading, handleCreatePost};
}

export default useCreatePost;