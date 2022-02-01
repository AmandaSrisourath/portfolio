import React from "react";
import { styled } from '@mui/system';
// import styled from "@emotion/styled";
import Box from '@mui/material/Box';
import AboutMe from "./AboutMe";

function BoxSx() {
    return (
        <ProjectsContainer>
            <Box
                sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'primary.dark',
                    borderRadius: 4,
                    marginBottom: 4,
                    padding: 4,
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
                <AboutMe />
            </Box>
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export default BoxSx;

// function Projects() {
//     return (
//         <div>
//             <h2>
//                 Projects
//             </h2>
//
//             <ProjectsContainer>
//                 <ProjectsBox>
//                     <h3>
//                         Convert a jQuery library to React
//                     </h3>
//
//                     <ul>
//                         <li>Redesign an application to reduce technical debt</li>
//                         <li>Analyze the performance of a web application</li>
//                         <li>Deploy a front-end application</li>
//                         <li>Unit testing</li>
//                         <li>Technologies used : React, React Router, Redux / Toolkit, Emotion, Jest, Testing-Library</li>
//                     </ul>
//                 </ProjectsBox>
//
//                 <ProjectsBox>
//                     <h3>
//                         Use an API for a bank user account with React
//                     </h3>
//
//                     <ul>
//                         <li>Implement a state manager in a React application using Redux / Toolkit</li>
//                         <li>Interact with an API</li>
//                         <li>Authentication with an API</li>
//                         <li>Technologies used : React, React Router, Redux / Toolkit, Axios</li>
//                     </ul>
//                 </ProjectsBox>
//
//                 <ProjectsBox>
//                     <h3>
//                         Build an analytics dashboard with React
//                     </h3>
//
//                     <ul>
//                         <li>Interact with a web service</li>
//                         <li>Develop advanced graphical elements using recharts</li>
//                         <li>Produce technical documentation for an application</li>
//                         <li>Technologies used : React, React Router, Axios, Recharts</li>
//                     </ul>
//                 </ProjectsBox>
//
//                 <ProjectsBox>
//                     <h3>
//                         Create an application with React and React Router
//                     </h3>
//
//                     <ul>
//                         <li>Developing routes for a web application with React Router</li>
//                         <li>Initialize a web application with a framework</li>
//                         <li>Create components with React</li>
//                         <li>Technologies used : React, React Router</li>
//                     </ul>
//                 </ProjectsBox>
//             </ProjectsContainer>
//         </div>
//     )
// }
//
// const ProjectsContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `
//
// const ProjectsBox = styled.div`
//   width: 44%;
//   color: white;
//   background-color: #282c34;
//   border-radius: 8px;
//   padding: 24px;
//   margin-bottom: 24px;
// `
//
// export default Projects;