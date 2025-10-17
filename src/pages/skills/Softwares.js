import { styled } from "@mui/system";
import bitbucket from "../../Assets/softwares/bitbucket.png";
import figma from "../../Assets/softwares/figma.png";
import jira from "../../Assets/softwares/jira.png";
import postman from "../../Assets/softwares/postman.png";
import sketch from "../../Assets/softwares/sketch.png";
import vscode from "../../Assets/softwares/vscode.png";

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
        <Icon>
          <img src={postman} alt="postman-img" width="56" height="56" />
          <p>Postman</p>
        </Icon>
      </IconsContainer>

      <IconsContainer>
        <Icon>
          <img src={vscode} alt="vscode-img" width="56" height="56" />
          <p>VS Code</p>
        </Icon>
        <Icon>
          <img src={jira} alt="jira-img" width="56" height="56" />
          <p>Jira</p>
        </Icon>
        <Icon>
          <img src={bitbucket} alt="bitbucket-img" width="56" height="56" />
          <p>Bitbucket</p>
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
