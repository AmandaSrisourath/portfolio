import React from "react";
import styled from "@emotion/styled";

function Presentation() {
    return (
        <Titles>
            <Name>
                Amanda Srisourath
            </Name>

            <Name>
                Front-end | Web designer
            </Name>
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
  font-size: 80px;
`

export default Presentation;