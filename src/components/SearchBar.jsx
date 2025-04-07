import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

function SearchBar() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault(); // Prevents page refresh
    navigate('/searched/' + input);  // Navigate to the search results page
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={submitHandler}>
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search for recipes..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </SearchForm>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  // background:rgb(0, 0, 0);
  border-radius: 12px;
  // box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;  // Limit the width of the form
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 0.75rem 1.5rem;
  background: #fff;
`;

const SearchIcon = styled.div`
  color: #888;
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  border-radius: 25px;
  background-color: #f9f9f9;
  color: #333;
  
  &::placeholder {
    color: #aaa;
  }
`;

export default SearchBar;
