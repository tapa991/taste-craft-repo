
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { query } = useParams();

  const getSearched = async (query) => {
    try {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${query}`);
      const recipes = await data.json();
      setSearchedRecipes(recipes.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      setLoading(true);
      setSearchedRecipes([]);
      getSearched(query);
    }
  }, [query]);

  return (
    <Container>
      <Header/>
      <SearchBar />
      <Title>Results for "{query}"</Title>
      {loading ? (
        <LoadingState>Loading...</LoadingState>
      ) : searchedRecipes.length === 0 ? (
        <EmptyState>No recipes found</EmptyState>
      ) : (
        <Grid>
          {searchedRecipes.map((item) => (
            <Link to={`/recipe/${item.id}`} key={item.id}>
              <RecipeCard>
                <ImageContainer>
                  <img src={item.image} alt={item.title} />
                </ImageContainer>
                <RecipeTitle>{item.title}</RecipeTitle>
              </RecipeCard>
            </Link>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Searched;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  color: #333;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0;
  text-align: center;
  color: rgb(255, 255, 255);
  text-transform: capitalize;
  letter-spacing: 1px;
`;

const LoadingState = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: #888;
  font-size: 1.2rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: #888;
  font-size: 1.2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const RecipeCard = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 55px;
  margin-bottom: 1rem;
  width: 100%;
  height: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const RecipeTitle = styled.h4`
  color: rgb(255, 255, 255);
  font-size: 1.2rem;
  text-align: center;
  font-weight: 600;
  margin: 0.5rem 0;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #e74c3c; /* Red theme for hover effect */
  }
`;
