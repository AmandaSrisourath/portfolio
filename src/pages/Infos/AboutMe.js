import { styled } from "@mui/system";

function AboutMe() {
  return (
    <div>
      <Subtittle>About me</Subtittle>

      <Paragraph>
        I am a passionate Software Engineer dedicated to transforming concepts
        into stunning and responsive web apps.
        <br></br>
        <br></br>🚀 Specialized in React.js and Vue.js.
        <br></br>🔄 API development with Node.js.
        <br></br>🔧 Unit tests with Vitest.
        <br></br>🛠️ UI/UX design principles.
        <br></br>📊 Optimizing website performance.
        <br></br>🎨 Create Figma design.
      </Paragraph>
    </div>
  );
}

const Subtittle = styled("h2")`
  margin-top: 0;
`;

const Paragraph = styled("p")`
  text-align: justify;
`;

export default AboutMe;
