import Header from '../components/Header'
import styled from "styled-components";
import { useState } from "react";
import useCreatePost from '../../hooks/useCreatePost';
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        instructions: [],
        ingredients: [],
        imageUrl: ""
    });
    const navigate = useNavigate();
    const {isLoading, handleCreatePost} = useCreatePost();

    const handlePostCreation = async () => {
        try {
            await handleCreatePost(inputs.title, inputs.description, inputs.imageUrl);
            navigate('/profile')
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <Header/>
        <input type="text" placeholder='Recipe Title' onChange={(e) => setInputs({ ...inputs, title: e.target.value})}/>
        <input type="text" placeholder='Description' onChange={(e) => setInputs({ ...inputs, description: e.target.value})}/>
        <input type="text" placeholder='Image Url' onChange={(e) => setInputs({ ...inputs, imageUrl: e.target.value})}/>
        <button onClick={handlePostCreation}>Upload</button>
        </>
    )
}

export default UploadPage