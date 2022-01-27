import React from "react";
import styled from "@emotion/styled";

function Header() {
    return (
        <div>
            <Title className="tittle">
                Amanda Srisourath - Front-end | Web designer
            </Title>
        </div>
    )
}

const Title = styled.h1`
  background-color: #282c34;
  color: #61dafb;
  text-align: center;
  margin: 0;
  padding: 32px;
`

export default Header;