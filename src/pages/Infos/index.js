import { styled } from "@mui/system";
import React from "react";
import BoxContainer from "../BoxContainer";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Experience from "./Experience";

function Infos() {
  return (
    <div id="infos">
      <Title>Infos</Title>

      <Container>
        <BoxContainer>
          <Contact />
        </BoxContainer>

        <BoxContainer>
          <AboutMe />
        </BoxContainer>

        <BoxContainer>
          <Experience />
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
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

export default Infos;
