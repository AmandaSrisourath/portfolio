import React from "react";
import { styled } from '@mui/system';
import BoxContainer from "../BoxContainer";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Education from "./Education";

function Infos() {
    return (
        <div>
            <Title id="infos">Infos</Title>

            <Container>
                <BoxContainer>
                    <Contact/>
                </BoxContainer>

                <BoxContainer>
                    <AboutMe/>
                </BoxContainer>

                <BoxContainer>
                    <Education/>
                </BoxContainer>
            </Container>
        </div>
    )
}

const Title = styled('h1')`
    text-align: center;
    color: white;
    cursor: default;
    transition: transform 300ms ease-in-out;
    :hover {
        transform: scale(1.15);
    }
`

const Container = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`

export default Infos;