import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;

// Styled Components
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
  width: 100%;
  max-width: 500px; /* Longer search bar */


  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 1rem;
  border-radius: 10px;
  border: 2px solid #ccc;
  margin-right:5px;
`;

const SearchButton = styled.button`
  background: #1e293b;
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #38bdf8;
  }
`;
