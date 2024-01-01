import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";
import Background from "./background";

const NavbarContainer = styled.nav`
  display: flex;
  color: #f6cd45;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #1e1e1e;
  // opacity: 0.5;
  position: sticky;
  top: 0;
  z-index: 2;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f6cd45;
  text-decoration: none;
  padding-left: 2rem;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  &:last-child {
    padding-right: 2rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MenuItem = styled.li`
  padding-left: 1rem;
  list-style: none;
  @media (max-width: 768px) {
    padding-left: 0.5rem;
    fled-direction: column;
    align-items: flex-start;
  }
`;

const Midsection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #1e1e1e;
  color: #b4b5ba;
`;

const Link = styled.a`
  padding: 1rem;
`;

const ImageStyle = {
  width: "100%",
  height: "auto",
  display: "block",
};

const IndexPage = () => {
  return (
    <main>
      <NavbarContainer>
        <Logo href="/">Restaurant</Logo>
        <Menu>
          <MenuItem>
            <a href="/">Home</a>
          </MenuItem>
          <MenuItem>
            <a href="/menu">Menu</a>
          </MenuItem>
          <MenuItem>
            <a href="/contact">Contact</a>
          </MenuItem>
        </Menu>
      </NavbarContainer>
      <StaticImage src="../images/steak.webp" alt="steak" style={ImageStyle} />
      <Midsection>
        <Link href="#">Reservations</Link>
        <span>|</span>
        <Link href="#">Gift Cards</Link>
        <span>|</span>
        <Link href="#">Gallery</Link>
      </Midsection>
      <Background />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Steakhouse</title>;
