import React from "react";
import styled from "styled-components";
import image from "../images/fancysalad.webp";

const Section = styled.section`
  position: relative;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 500px;
  color: #b4b5ba;
  text-align: center;
`;

const CTA = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #f6cd45;
  color: #000;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 200px;
  height: 50px;
`;

const H1 = styled.h1`
  font-size: 2rem;
  color: #f6cd45;
`;

const Background = () => {
  return (
    <Section>
      <Overlay />
      <Content>
        <H1>Welcome to our Restaurant</H1>
        <p>Discover our delicious menu</p>
        <CTA>Order Now</CTA>
      </Content>
    </Section>
  );
};

export default Background;
