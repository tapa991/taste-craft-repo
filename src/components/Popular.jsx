import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledPopular = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: #fdfdfd;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
`;

const RecipeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding-bottom: 1rem;
`;

const Card = styled.div`
  width: 220px;
  height: 280px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;  // Ensures padding and border don't affect the size

  &:hover {
    transform: scale(1.03);
  }
`;



const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const RecipeTitle = styled.p`
  font-size: 1rem;
  padding: 1rem;
  margin: 0;
  color: #555;
`;

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=4`
        );
        if (!api.ok) {
          throw new Error(`API error: ${api.status}`);
        }
        const data = await api.json();
        console.log(data);
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    }
  };

  return (
    <StyledPopular>
      <Title>Popular Recipes</Title>
      <RecipeContainer>
        {popular && popular.length > 0 ? (
          popular.map((recipe) => (
            <Card key={recipe.id}>
              <Image
                src={recipe.image || "cakeHolder.jpg"}
                alt={recipe.title || "Recipe Image"}
              />
              <RecipeTitle>{recipe.title}</RecipeTitle>
            </Card>
          ))
        ) : (
          Array(4).fill(0).map((_, i) => (
            <Card key={i}>
              <Image src="cakeHolder.jpg" alt="Placeholder" />
              <RecipeTitle>Loading...</RecipeTitle>
            </Card>
          ))
        )}
      </RecipeContainer>
    </StyledPopular>
  );
}

export default Popular;
