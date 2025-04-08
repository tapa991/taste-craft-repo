import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledVeggie = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  // background:rgb(253, 253, 253);
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #253, 253, 253;
`;

const RecipeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding-bottom: 1rem;
`;

const Card = styled.div`
  width: 250px;
  height: 250px;
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
  height: 250px;
  object-fit: cover;
`;

const RecipeTitle = styled.p`
  font-size: 1rem;
  padding: 1rem;
  margin: 0;
  color: #555;
`;

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      try {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&tags=vegetarian&number=4`
        );
        if (!api.ok) {
          throw new Error(`API error: ${api.status}`);
        }
        const data = await api.json();
        localStorage.setItem("veggie", JSON.stringify(data.recipes));
        setVeggie(data.recipes);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    }
  };

  return (
    <StyledVeggie>
      <Title>Popular Veggie Recipes</Title>
      <RecipeContainer>
        {veggie && veggie.length > 0 ? (
          veggie.map((recipe) => (
            <Link to={"/recipe/" + recipe.id} key={recipe.id}>
            <Card key={recipe.id}>
              <Image
                src={recipe.image || "cakeHolder.jpg"}
                alt={recipe.title || "Recipe Image"}
              />
              <RecipeTitle>{recipe.title}</RecipeTitle>
            </Card>
            </Link>
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
    </StyledVeggie>
  );
}

export default Veggie;
