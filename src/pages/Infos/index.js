import { styled } from "@mui/system";
import React from "react";
import BoxContainer from "../BoxContainer";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Experiences from "./Experiences";

function Infos() {
  return (
    <div id="infos">
      <Title>Infos</Title>

      <Container>
        <BoxContainer>
          <AboutMe />
        </BoxContainer>

        <BoxContainer>
          <Experiences />
        </BoxContainer>

        <BoxContainer>
          <Contact />
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
`;

export default Infos;
