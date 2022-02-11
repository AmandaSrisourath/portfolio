import React from "react";
import styled from "@emotion/styled";

function Presentation() {
    return (
        <Titles id="home">
            <Name>
                Amanda Srisourath
            </Name>

            <Description>
                Front-end developer | Web designer
            </Description>
        </Titles>
    )
}

const Titles = styled('div')`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Name = styled('h1')`
    color: #61dafb;
    margin: 8px;
    font-size: 6.5vw;
`

const Description = styled('h2')`
    color: #61dafb;
    margin-top: 8px;
    margin-bottom: 16px;
    font-size: 4.5vw;
`

export default Presentation;