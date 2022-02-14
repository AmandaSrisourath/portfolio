import React from "react";
import { styled } from '@mui/system';
import BoxContainer from "../BoxContainer";
import CodingSkills from "./CodingSkills";
import Softwares from "./Softwares";

function Skills() {
    return (
        <div>
            <Title id="skills">Skills</Title>

            <Container>
                <BoxContainer>
                    <CodingSkills/>
                </BoxContainer>

                <BoxContainer>
                    <Softwares/>
                </BoxContainer>
            </Container>
        </div>
    )
}

const Title = styled('h1')`
    text-align: center;
    color: #61dafb;
    cursor: default;
    transform: scale(1);
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
    padding-bottom: 32px;
`

export default Skills;