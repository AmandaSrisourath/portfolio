import React from "react";
import { styled } from '@mui/system';
import BoxContainer from "../BoxContainer";
import Skills from "./Skills";
import Softwares from "./Softwares";

function SkillsAndSoftwares() {
    return (
        <div>
            <Title id="skills-softwares">Skills & Softwares</Title>

            <Container>
                <BoxContainer>
                    <Skills/>
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
`

const Container = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`

export default SkillsAndSoftwares;