import { styled } from "@mui/system";
import React from "react";

function AboutMe() {
  return (
    <div>
      <Subtittle>About me</Subtittle>

      <Paragraph>
        I am a passionate Frontend Developer dedicated to transforming concepts
        into stunning and responsive web applications.
        <br></br>
        <br></br>🚀 Specialized in Vue.js and React.js.
        <br></br>🛠️ UI/UX design principles.
        <br></br>💡 Strong problem-solving.
        <br></br>📊 Optimizing website performance.
        <br></br>🔧 Testing and debugging.
        <br></br>🌐 Cross-browser compatibility.
        <br></br>🔄 Staying updated with trends and tech.
      </Paragraph>
    </div>
  );
}

const Subtittle = styled("h2")`
  margin-top: 0;
`;

const Paragraph = styled("p")`
  text-align: justify;
  line-height: 1.4;
`;

export default AboutMe;
