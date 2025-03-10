import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/Searchbar'
import styled from "styled-components";


const HomePage = () => {
    return (
        <>
        <Header/>
        <HomePageContainer>
            <h1>TasteCraft</h1>
            <SearchBar/>

            <Featured>
                <h2>Featured</h2>
                <RecipeContainer>
                    <Image src="/cakeHolder.jpg" alt="Apple Pie" />
                    <Image src="/cakeHolder.jpg" alt="Apple Pie" />
                    <Image src="/cakeHolder.jpg" alt="Apple Pie" />
                    <Image src="/cakeHolder.jpg" alt="Apple Pie" />
                </RecipeContainer>
            </Featured>

            <Popular>
                <h2>Popular</h2>
                <RecipeContainer>
                    <Image src="cakeHolder.jpg" alt="Apple Pie" />
                    <Image src="cakeHolder.jpg" alt="Apple Pie" />
                    <Image src="cakeHolder.jpg" alt="Apple Pie" />
                    <Image src="cakeHolder.jpg" alt="Apple Pie" />
                </RecipeContainer>
            </Popular>
        </HomePageContainer>
        </>
    )
}

export default HomePage

// Styled Components
const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

const Featured = styled.div`
    display: flex;
    flex-direction: column;
`;

const Popular = styled.div`
    display: flex;
    flex-direction: column;
`;

const RecipeContainer = styled.div`
    display: flex;
    align-items: center; 
    gap:50px;
`;

const Image = styled.img`
    height:200px;
    width: 200px;
    object-fit: cover;
    border-radius: 10px;
`;