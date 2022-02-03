import React from "react";
import { styled } from '@mui/system';
import Menu from "../home/Menu";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import BoxContainer from "../BoxContainer";

function Infos() {
    return (
        <Background>
            <Menu/>
            <Title>Infos</Title>

            <Container>
                <BoxContainer>
                    <Contact/>
                </BoxContainer>

                <BoxContainer>
                    <AboutMe/>
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

export default Infos;