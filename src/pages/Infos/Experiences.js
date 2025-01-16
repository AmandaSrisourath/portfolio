import { styled } from "@mui/system";
import React from "react";

function Experiences() {
  return (
    <div>
      <Subtittle>Experiences</Subtittle>

      <Container>
        <Name>💼 Front-End Developer - Full-time</Name>
        <Paragraph> Powertec Wireless Technology </Paragraph>
        <Paragraph>April 2022 - Now</Paragraph>
      </Container>

      <br></br>

      <Container>
        <Name>🎓 Bachelor's degree, Computer Science - Remote</Name>
        <Paragraph> OpenClassrooms</Paragraph>
        <Paragraph>2022</Paragraph>
      </Container>
    </div>
  );
}

const Subtittle = styled("h2")`
  margin-top: 0;
`;

const Container = styled("div")`
  background-color: rgba(97, 218, 251, 0.24);
  border-radius: 8px;
  padding: 8px 16px;
`;

const Name = styled("h3")`
  margin: 0;
`;

const Paragraph = styled("p")`
  margin: 0;
  line-height: 1.5;
`;

export default Experiences;
