import React from "react";
import styled from "@emotion/styled";
import { Home } from '@mui/icons-material';
import ImageAvatar from "./ImageAvatar";

function Menu() {
    return (
        <Container>
            <Nav>
                <LinkName href="#home"><ImageAvatar/></LinkName>
                <LinkName href="#infos">Infos</LinkName>
                <LinkName href="#projects">Projects</LinkName>
                <LinkName href="#skills">Skills</LinkName>
            </Nav>
        </Container>
    )
}

const Container = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 24px 0;
    background-color: #20232a;
    position: fixed;
    width: 100%;
    z-index: 1;
`

const Nav = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 340px;
`

const LinkName = styled('a')`
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    align-self: center;
    transform: scale(1);
    transition: transform 300ms ease-in-out;
    :hover {
        transform: scale(1.15);
        color: #61dafb;
    }
`

export default Menu;