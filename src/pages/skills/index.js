import { styled } from "@mui/system";
import React from "react";
import BoxContainer from "../BoxContainer";
import CodingSkills from "./CodingSkills";
import Softwares from "./Softwares";

function Skills() {
  return (
    <div id="skills">
      <Title>Skills</Title>

      <Container>
        <BoxContainer>
          <CodingSkills />
        </BoxContainer>

        <BoxContainer>
          <Softwares />
        </BoxContainer>
      </Container>
    </div>
  );
}

const Title = styled("h1")`
  text-align: center;
  color: white;
  cursor: default;
`;

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 56px;
`;

export default Skills;
