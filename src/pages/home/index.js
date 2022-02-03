import React from "react";
import styled from "@emotion/styled";
import Menu from "./Menu";
import Presentation from "./Presentation";

function Home() {
    return (
        <Background>
            <Menu/>
            <Presentation/>
        </Background>
    )
}

const Background = styled('div')`
    background-color: #282c34;
    min-height: 100vh;
`

export default Home;