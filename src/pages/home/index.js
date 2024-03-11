import styled from "@emotion/styled";
import React from "react";
import bg from "../../Assets/bg.jpeg";
import Footer from "../Footer";
import Infos from "../Infos/index";
import Projects from "../projects/components/index";
import SkillsAndSoftwares from "../skills";
import Menu from "./Menu";
import Presentation from "./Presentation";

function Home() {
  return (
    <Background>
      <Menu />
      <Presentation />
      <Infos />
      <Projects />
      <SkillsAndSoftwares />
      <Footer />
    </Background>
  );
}

const Background = styled("div")`
  background-image: url(${bg});
  min-height: 100vh;
`;

export default Home;
