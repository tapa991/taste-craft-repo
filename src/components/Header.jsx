import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Logo>TasteCraft</Logo>

        {/* Desktop Navigation */}
        <NavLinks>
          <NavLink href="/recipe">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Services</NavLink>
          <NavLink href="#">Contact</NavLink>
        </NavLinks>
      </NavContainer>

      {/* Sign In Button */}
      <SignInButton>Sign In</SignInButton>
    </Nav>
  );
};

export default Header;

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between; /* Push items to the far ends */
  align-items: center;
  padding: 1rem 2rem;
  background: #1e293b;
  color: white;
  position: relative;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 40px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  transition: 0.3s ease;

  &:hover {
    color: #38bdf8;
  }
`;

const SignInButton = styled.button`
  background: #38bdf8;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #0284c7;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
