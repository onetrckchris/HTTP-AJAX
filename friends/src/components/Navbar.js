import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  background-color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavHeader = styled.h1`
  margin: 0;
`;

const NavLinks = styled.div`

`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &:hover {
    border-bottom: 1px solid black;
  }
`;

const Navbar = () => {
    return (
        <Nav>
          <NavHeader>Chris's Friends</NavHeader>
          <NavLinks>
            <StyledLink to="/">Home</StyledLink>{' | '}
            <StyledLink to="/friends">Friends</StyledLink>{' | '}
            <StyledLink to="/friend-form">New Friend</StyledLink>
          </NavLinks>
        </Nav>
    )
}

export default Navbar;