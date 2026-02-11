import { styled } from "@mui/system";

function Experiences() {
  return (
    <>
      <Subtittle>Experiences</Subtittle>

      <Container>
        <Name>
          Software Engineer (Contractor) <br />
        </Name>
        <Paragraph>October 2025 - Now</Paragraph>
      </Container>

      <br></br>

      <Container>
        <Name>
          Software Engineer (Full-time) <br />
        </Name>
        <Paragraph> Powertec Wireless Technology </Paragraph>
        <Paragraph>April 2022 - September 2025</Paragraph>
      </Container>

      <br></br>

      <Container>
        <Name>Bachelor of Computer Science</Name>
        <Paragraph> OpenClassrooms</Paragraph>
        <Paragraph>2022</Paragraph>
      </Container>
    </>
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

const Name = styled("h4")`
  margin: 0;
`;

const Paragraph = styled("p")`
  margin: 0;
`;

export default Experiences;
