import './App.css';
import styled from "@emotion/styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <Container>
          <AboutMe />
          <Projects />
      </Container>
      <Footer />
    </div>
  )
}

const Container = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export default App;
