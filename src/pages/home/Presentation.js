import styled from "@emotion/styled";
import React from "react";

function Presentation() {
  return (
    <Titles id="home">
      <Hello>
        <Letters>
          <AnimatedLetter>H</AnimatedLetter>
          <AnimatedLetter>i</AnimatedLetter>
        </Letters>
        <Letters>
          <AnimatedLetter>👋🏼</AnimatedLetter>
          <AnimatedLetter>,</AnimatedLetter>
        </Letters>
      </Hello>

      <Name>
        <Letters>
          <AnimatedLetter>I</AnimatedLetter>
          <AnimatedLetter>'</AnimatedLetter>
          <AnimatedLetter>m</AnimatedLetter>
        </Letters>
        <Letters>
          <AnimatedLetter>A</AnimatedLetter>
          <AnimatedLetter>m</AnimatedLetter>
          <AnimatedLetter>a</AnimatedLetter>
          <AnimatedLetter>n</AnimatedLetter>
          <AnimatedLetter>d</AnimatedLetter>
          <AnimatedLetter>a</AnimatedLetter>
        </Letters>
        <Letters>
          <AnimatedLetter>S</AnimatedLetter>
          <AnimatedLetter>r</AnimatedLetter>
          <AnimatedLetter>i</AnimatedLetter>
          <AnimatedLetter>s</AnimatedLetter>
          <AnimatedLetter>o</AnimatedLetter>
          <AnimatedLetter>u</AnimatedLetter>
          <AnimatedLetter>r</AnimatedLetter>
          <AnimatedLetter>a</AnimatedLetter>
          <AnimatedLetter>t</AnimatedLetter>
          <AnimatedLetter>h</AnimatedLetter>
          <AnimatedLetter>,</AnimatedLetter>
        </Letters>
      </Name>

      <Description>
        <Letters>
          <AnimatedLetter>a</AnimatedLetter>
        </Letters>
        <Letters>
          <AnimatedLetter>F</AnimatedLetter>
          <AnimatedLetter>r</AnimatedLetter>
          <AnimatedLetter>o</AnimatedLetter>
          <AnimatedLetter>n</AnimatedLetter>
          <AnimatedLetter>t</AnimatedLetter>
          <AnimatedLetter>-</AnimatedLetter>
          <AnimatedLetter>E</AnimatedLetter>
          <AnimatedLetter>n</AnimatedLetter>
          <AnimatedLetter>d</AnimatedLetter>
        </Letters>
        <Letters>
          <AnimatedLetter>D</AnimatedLetter>
          <AnimatedLetter>e</AnimatedLetter>
          <AnimatedLetter>v</AnimatedLetter>
          <AnimatedLetter>e</AnimatedLetter>
          <AnimatedLetter>l</AnimatedLetter>
          <AnimatedLetter>o</AnimatedLetter>
          <AnimatedLetter>p</AnimatedLetter>
          <AnimatedLetter>e</AnimatedLetter>
          <AnimatedLetter>r</AnimatedLetter>
        </Letters>
      </Description>
    </Titles>
  );
}

const Titles = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  line-height: 0.5;
  cursor: default;
`;
const Hello = styled("h1")`
  display: flex;
  justify-content: center;
  font-size: 3.5vw;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const Name = styled("h1")`
  display: flex;
  justify-content: center;
  font-size: 3.5vw;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const Description = styled("h1")`
  display: flex;
  justify-content: center;
  font-size: 3.5vw;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const Letters = styled("div")`
  display: flex;
  margin: 1%;
`;

const AnimatedLetter = styled("h1")`
  color: white;
  margin: 0;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  :hover {
    animation-name: rubberBand;
    color: #61dafb;
  }

  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
`;

export default Presentation;
