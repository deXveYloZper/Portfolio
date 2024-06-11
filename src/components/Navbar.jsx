import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
color: #bac4b8;
position: absolute;
top: 0;
width: 100%;
`;

const NavbarItems = styled.div`
  display: flex;
  justify-content: start;
  padding: 20px 40px;
`;

const NavName = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    letter-spacing: -1px;
    font-size: 22px;
    cursor: pointer;
    border-right: solid 1px #bac4b8;
    color: #bac4b8;
    padding-right: 0.5rem;
    margin-right: 0.5rem;
  }

  span {
    line-height: 22px;  
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarItems>
        <NavName>
          <a href="https://www.kristianutsar.com">KRISTIAN</a>
          <span>Portfolio</span>
        </NavName>
      </NavbarItems>
    </NavbarContainer>
  );
};

export default Navbar;
