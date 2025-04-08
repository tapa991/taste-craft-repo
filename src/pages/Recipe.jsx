import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instruction");
  const { id } = useParams();  // Destructure directly from useParams()

  // Improved function to fetch recipe details
  const getRecipeDetails = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recipe details");
      }

      const recipeData = await response.json();
      setDetails(recipeData);
    } catch (error) {
      console.error(error); // Log error in case of fetch failure
    }
  };

  useEffect(() => {
    getRecipeDetails();
  }, [id]);  // Updated to use destructured id

  return (
    <div>
      <Header/>
      <SearchBarWrapper>
        <SearchBar /> {/* Assuming SearchBar is a separate component */}
      </SearchBarWrapper>

    <DetailWrapper>
      <ImageContainer>
        <h2>{details.title?.toUpperCase()}</h2>
        <Image src={details.image} alt={details.title} />
      </ImageContainer>
      <Info>
        <ButtonContainer>
          <Button
            className={activeTab === "instruction" ? "active" : ""}
            onClick={() => setActiveTab("instruction")}>
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredient" ? "active" : ""}
            onClick={() => setActiveTab("ingredient")}>
            Ingredients
          </Button>
        </ButtonContainer>

        {activeTab === "instruction" && (
          <div className="instructions" 
               dangerouslySetInnerHTML={{ __html: details.instructions }} />
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
    </div>
  );
}

export default Recipe;

// Styled components

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  max-width: 1000px;
  padding: 0 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: rgb(255, 255, 255);
    font-weight: 600;
  }
`;

const Image = styled.img`
  border-radius: 3.5rem;
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    max-width: 400px; /* Set a max width for larger screens */
    margin-bottom: 0;
  }
`;

const Info = styled.div`
  flex: 1;
  margin-top: 2rem;

  ul {
    margin-top: 2rem;
    padding-left: 1.5rem;
  }

  li {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 0.8rem;
  }

  .instructions {
    line-height: 1.8;
    margin-top: 2rem;
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  color: #333;
  background: white;
  border: 2px solid #e8e8e8;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.active {
    background:rgb(43, 255, 0);
    color: white;
    border-color:rgb(255, 255, 255);
  }

  &:hover {
    background: ${props => props.className === 'active' ? '#f54748' : '#f5f5f5'};
    transform: translateY(-2px);
  }
`;
const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;  /* Adjust margin for space between the search bar and content */
`;