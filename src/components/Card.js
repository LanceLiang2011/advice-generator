import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../utils/props";
import lineDesk from "../images/pattern-divider-desktop.svg";
import lineMobile from "../images/pattern-divider-mobile.svg";
import dice from "../images/icon-dice.svg";

export default function Card({ id, children, onClick }) {
  return (
    <Wrapper>
      <Header>advice #{id}</Header>
      <Advice>{children}</Advice>
      <ImgLine alt="line" src={lineDesk} />
      <MobileLine alt="line" src={lineMobile} />
      <Button onClick={onClick}>
        <img src={dice} alt="dice" />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 332px;
  padding: 48px;
  background: ${COLORS.darkGrayishBlue};
  border-radius: 15px;
  box-shadow: 30px 50px 80px rgba(0, 0, 0 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 600px) {
    height: auto;
    min-height: 315px;
    padding: 24px;
  }
`;

const Header = styled.p`
  text-transform: uppercase;
  color: ${COLORS.neonGreen};
  font-size: 0.8125rem;
  letter-spacing: 4px;
  font-weight: 900;
  margin: -24px;
`;
const Advice = styled.p`
  color: ${COLORS.lightCyan};
  font-size: 1.75rem;
  letter-spacing: -0.3px;
  font-weight: 900;

  &::before {
    content: "“";
  }

  &::after {
    content: "”";
  }
  @media (max-width: 600px) {
    maargin-top: 12px;
    font-size: 1.5rem;
  }
`;

const ImgLine = styled.img`
  display: inline-block;

  @media (max-width: 600px) {
    display: none;
  }
`;
const MobileLine = styled.img`
  display: none;

  @media (max-width: 600px) {
    display: inline-block;
  }
`;

const Button = styled.button`
  height: 64px;
  width: 64px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(50%);

  color: ${COLORS.darkBlue};
  background: ${COLORS.neonGreen};

  &:hover {
    box-shadow: 0px 0px 40px #53ffaa;
  }

  &:active {
    box-shadow: 0px 0px 20px #53ffaa;
  }
`;
