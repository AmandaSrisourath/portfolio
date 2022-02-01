import './App.css';
import styled from "@emotion/styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/ProjectsArray";
import AboutMe from './components/AboutMe';
import Skills from "./components/Skills";
import BoxContainer from './components/BoxContainer';
import ProjectsArray from './components/ProjectsArray';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <BoxContainer>
          <AboutMe />
        </BoxContainer>
        <BoxContainer>
          <ProjectsArray />
        </BoxContainer>
        <BoxContainer>
          <Skills />
        </BoxContainer>
      </Container>
      <Footer />
    </div>
  )
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #282c34;
`

export default App;