import React from "react";
import { styled } from '@mui/system';
import Menu from "../home/Menu";
import BoxContainer from "../BoxContainer";
import Skills from "./Skills";
import Softwares from "./Softwares";

function SkillsAndSoftwares() {
    return (
        <Background>
            <Menu/>
            <Title>Skills & Softwares</Title>

            <Container>
                <BoxContainer>
                    <Skills/>
                </BoxContainer>

                <BoxContainer>
                    <Softwares/>
                </BoxContainer>
            </Container>
        </Background>
    )
}

const Background = styled('div')`
    background-color: #282c34;
    min-height: 100vh;
`

const Title = styled('h1')`
    text-align: center;
    color: #61dafb;
`

const Container = styled('div')`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`

export default SkillsAndSoftwares;