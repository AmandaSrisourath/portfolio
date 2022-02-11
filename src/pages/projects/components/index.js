import React from "react";
import { styled } from '@mui/system';
import { data } from "../data";
import BoxContainer from "../../BoxContainer";
import ProjectDetails from "./ProjectDetails";

function Projects() {
    return (
        <div>
            <Title id="projects">Projects</Title>
            <Container>
                {data.map((project) => {
                    return (
                        <BoxContainer key={project.id}>
                            <ProjectDetails title={project.title} skills={project.skills} technologies={project.technologies} url={project.url} img={project.img}/>
                        </BoxContainer>
                    )}
                )}
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

export default Projects;