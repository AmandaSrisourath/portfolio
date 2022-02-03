import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Home } from '@mui/icons-material';

function Menu() {
    return (
        <Container>
            <Nav>
                <LinkName to={"/"}><Home/></LinkName>
                <LinkName to={"/infos"}>Infos</LinkName>
                <LinkName to={"/projects"}>Projects</LinkName>
                <LinkName to={"/skills-softwares"}>Skills & Softwares</LinkName>
            </Nav>
        </Container>
    )
}

const Container = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 32px;
    background-color: #20232a;
`

const Nav = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 550px;
`

const LinkName = styled(Link)`
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    align-self: center;
    :hover {
        color: #61dafb;
    }
`

export default Menu;