import Header from '../components/Header';
import styled from 'styled-components';
import { useState } from 'react';
import useCreatePost from '../../hooks/useCreatePost';
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        instructions: [""], // Start with one empty instruction input
        ingredients: [""], // Start with one empty ingredient input
        imageUrl: ""
    });

    const navigate = useNavigate();
    const { isLoading, handleCreatePost } = useCreatePost();

    // Handle adding an ingredient input
    const handleAddIngredient = () => {
        setInputs((prev) => ({
            ...prev,
            ingredients: [...prev.ingredients, ""] // Add a new empty string to the ingredients array
        }));
    };

    // Handle adding an instruction input
    const handleAddInstruction = () => {
        setInputs((prev) => ({
            ...prev,
            instructions: [...prev.instructions, ""] // Add a new empty string to the instructions array
        }));
    };

    // Handle changes to ingredients
    const handleIngredientChange = (index, value) => {
        const updatedIngredients = [...inputs.ingredients];
        updatedIngredients[index] = value;
        setInputs((prev) => ({ ...prev, ingredients: updatedIngredients }));
    };

    // Handle changes to instructions
    const handleInstructionChange = (index, value) => {
        const updatedInstructions = [...inputs.instructions];
        updatedInstructions[index] = value;
        setInputs((prev) => ({ ...prev, instructions: updatedInstructions }));
    };

    const handlePostCreation = async () => {
        try {
            await handleCreatePost(inputs.title, inputs.description, inputs.ingredients, inputs.instructions, inputs.imageUrl);
            navigate('/profile');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
        <Header />
        <Container>
            <Heading>Upload Recipe</Heading>
            <StyledInput
                type="text"
                placeholder="Recipe Title"
                onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
            />
            <StyledTextarea
                placeholder="Description"
                onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
            />
            <StyledInput
                type="text"
                placeholder="Image Url"
                onChange={(e) => setInputs({ ...inputs, imageUrl: e.target.value })}
            />

            <Section>
                <h3>Ingredients</h3>
                {inputs.ingredients.map((ingredient, index) => (
                    <div key={index}>
                        <StyledInput
                            type="text"
                            value={ingredient}
                            placeholder="Ingredient"
                            onChange={(e) => handleIngredientChange(index, e.target.value)}
                        />
                    </div>
                ))}
                <StyledButton onClick={handleAddIngredient}>Add Ingredient</StyledButton>
            </Section>

            <Section>
                <h3>Instructions</h3>
                {inputs.instructions.map((instruction, index) => (
                    <div key={index}>
                        <StyledInput
                            type="text"
                            value={instruction}
                            placeholder="Instruction"
                            onChange={(e) => handleInstructionChange(index, e.target.value)}
                        />
                    </div>
                ))}
                <StyledButton onClick={handleAddInstruction}>Add Instruction</StyledButton>
            </Section>

            <StyledButton onClick={handlePostCreation}>Upload</StyledButton>
        </Container>
        </>
    );
};

export default UploadPage;

// Styled Components

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
`;

const Heading = styled.h1`
    font-size: 30px;
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    height: 200px;
    resize: vertical;
`;

const Section = styled.div`
    width: 100%;
    margin-bottom: 20px;
    h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }
`;

const StyledButton = styled.button`
    padding: 10px 20px;
    background-color:rgb(73, 81, 145);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    &:hover {
        background-color:rgb(58, 49, 110);
    }
`;
