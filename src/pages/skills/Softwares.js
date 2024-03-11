import { styled } from "@mui/system";
import React from "react";
import figma from "../../Assets/figma.png";
import postman from "../../Assets/postman.png";
import sketch from "../../Assets/sketch.png";
import trello from "../../Assets/trello.png";

function Softwares() {
  return (
    <div>
      <Subtittle>Softwares</Subtittle>

      <IconsContainer>
        <Icon>
          <img src={figma} alt="figma-img" width="56" height="56" />
          <p>Figma</p>
        </Icon>
        <Icon>
          <img src={sketch} alt="sketch-img" width="56" height="56" />
          <p>Sketch</p>
        </Icon>
      </IconsContainer>

      <IconsContainer>
        <Icon>
          <img src={postman} alt="postman-img" width="56" height="56" />
          <p>Postman</p>
        </Icon>
        <Icon>
          <img src={trello} alt="trello-img" width="56" height="56" />
          <p>Trello</p>
        </Icon>
      </IconsContainer>
    </div>
  );
}

const Subtittle = styled("h2")`
  margin-top: 0;
`;

const IconsContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  text-align: center;
  margin-bottom: 16px;
`;

const Icon = styled("div")`
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  :hover {
    animation-name: rubberBand;
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

export default Softwares;
