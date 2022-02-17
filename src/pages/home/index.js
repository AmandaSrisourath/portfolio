import React from "react";
import styled from "@emotion/styled";
import Menu from "./Menu";
import Presentation from "./Presentation";
import Infos from "../infos/index";
import Projects from "../projects/components/index";
import SkillsAndSoftwares from "../skills";
import bg from "../../Assets/bg.jpeg";

function Home() {
    return (
        <Background>
            <Menu/>
            <Presentation/>
            <Infos/>
            <Projects/>
            <SkillsAndSoftwares/>
        </Background>
    )
}

const Background = styled('div')`
    background-image: url(${bg});
    min-height: 100vh;
`

export default Home;