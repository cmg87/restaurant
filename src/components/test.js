import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;

  //   @media (max-width: 768px) {
  //     flex-direction: column;
  //     align-items: flex-start;
  //   }
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }
`;

const MenuItem = styled.li`
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const HamburgerMenu = styled.div`
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: #333;
  color: #333;
`;

// const DropdownMenu = styled.div`
//   display: none;
//   position: absolute;
//   top: 100%;
//   left: 0;
//   background-color: #f2f2f2;
//   padding: 10px;

//   ${HamburgerMenu}:checked + & {
//     display: block;
//   }
// `;

const DropdownMenu = styled.div`
  display: block;
  position: relative;
  background-color: #f2f2f2;
  padding: 10px;
`;

const TestPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function toggleMenu(e) {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    console.log("State has changed:", isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    console.log("State has changed:", windowSize.width);
  }, [windowSize.width]);

  const renderDropdown = () => {
    return (
      <DropdownMenu>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </DropdownMenu>
    );
  };

  const renderMenu = () => {
    return (
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    );
  };

  return (
    <>
      <Navbar>
        <Logo href="#">Logo</Logo>
        {windowSize.width <= 768 ? (
          <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
        ) : null}
        {windowSize.width > 768 ? renderMenu() : null}
      </Navbar>
      {isMenuOpen ? renderDropdown() : null}
    </>
  );
};

export default TestPage;
