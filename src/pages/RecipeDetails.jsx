import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instruction");

  let param = useParams(); // Fetch the URL params
  const { name } = param; // Extract the 'id' from the URL params

  const getRecipeDetails = async () => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${name}/information?apiKey=${import.meta.env.VITE_API_KEY}`
      );
      const recipeData = await data.json();
      setDetails(recipeData);
      console.log(recipeData); // Optional: for debugging
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  useEffect(() => {
    getRecipeDetails(); // Call the function when the component mounts
  }, [id]); // Dependency array should watch 'id'

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <Image src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instruction" ? "active" : ""}
          onClick={() => setActiveTab("instruction")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredient" ? "active" : ""}
          onClick={() => setActiveTab("ingredient")}
        >
          Ingredients
        </Button>

        {activeTab === "instruction" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }} />
          </div>
        )}
        {activeTab === "ingredient" && (
          <ul>
            {details.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

export default Recipe;

// Styled-components for styling

const DetailWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #333;
  font-family: 'Poppins', sans-serif;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 1rem;
`;

const Info = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #e74c3c; /* Highlight active tab */
    color: #fff;
  }

  &:hover {
    background-color: #ddd;
  }
`;
