import { styled } from "@mui/system";

function AboutMe() {
  return (
    <div>
      <Subtittle>About me</Subtittle>

      <Paragraph>
        I am a passionate Software Engineer dedicated to transforming concepts
        into stunning and responsive web apps.
        <br></br>
        <br></br>🚀 Specialized in Vue.js and React.js.
        <br></br>🛠️ UI/UX design principles.
        <br></br>💡 Strong problem-solving.
        <br></br>🔧 Testing and debugging.
        <br></br>📊 Optimizing website performance.
        <br></br>🌐 Cross-browser compatibility.
        <br></br>🔄 Staying updated with technologies.
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
