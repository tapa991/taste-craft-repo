import React, { useState } from 'react';
import SearchBar from '../components/Searchbar';
import styled from 'styled-components';

const SearchPage = () => {
    const [filters, setFilters] = useState({
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        nutfree:false
    });

    const recipes = [
        { name: "Chocolate Cake", image: "cakeHolder.jpg" },
        { name: "Vegan Brownies", image: "cakeHolder.jpg" },
        { name: "Gluten-Free Cookies", image: "cakeHolder.jpg" },
        { name: "Dairy-Free Ice Cream", image: "cakeHolder.jpg" },
    ];

    const handleFilterChange = (e) => {
        const { name, checked } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: checked,
        }));
    };

    return (
        <SearchPageContainer>
            <h1>TasteCraft</h1>
            <SearchBar />

            {/* Filter Section */}
            <FilterSection>
                {/* <FilterTitle>Filter By:</FilterTitle> */}
                <FilterItem>
                    <input
                        type="checkbox"
                        id="vegan"
                        name="vegan"
                        checked={filters.vegan}
                        onChange={handleFilterChange}
                    />
                    <label htmlFor="vegan">Vegan</label>
                </FilterItem>
                <FilterItem>
                    <input
                        type="checkbox"
                        id="glutenFree"
                        name="glutenFree"
                        checked={filters.glutenFree}
                        onChange={handleFilterChange}
                    />
                    <label htmlFor="glutenFree">Gluten-Free</label>
                </FilterItem>
                <FilterItem>
                    <input
                        type="checkbox"
                        id="dairyFree"
                        name="dairyFree"
                        checked={filters.dairyFree}
                        onChange={handleFilterChange}
                    />
                    <label htmlFor="dairyFree">Dairy-Free</label>
                </FilterItem>
                <FilterItem>
                    <input
                        type="checkbox"
                        id="nutFree"
                        name="nutFree"
                        checked={filters.nutfree}
                        onChange={handleFilterChange}
                    />
                    <label htmlFor="nutFree">Nut-Free</label>
                </FilterItem>
            </FilterSection>

            <Results>
                <h2>Search Results</h2>
                <RecipeContainer>
                    {recipes.map((recipe, index) => (
                        <RecipeItem key={index}>
                            <Image src={recipe.image} alt={recipe.name} />
                            <RecipeName>{recipe.name}</RecipeName>
                        </RecipeItem>
                    ))}
                </RecipeContainer>
            </Results>
        </SearchPageContainer>
    );
};

export default SearchPage;

// Styled Components
const SearchPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Results = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

const RecipeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
`;

const RecipeItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 10px;
`;

const RecipeName = styled.p`
    font-weight: bold;
`;

const FilterSection = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;  // Changed to row to make it horizontal
    gap: 20px;  // Adds spacing between the filters
    align-items: center; // Aligns items vertically in the middle
`;


const FilterTitle = styled.h3`
    margin-bottom: 10px;
`;

const FilterItem = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

