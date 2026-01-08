import { styled } from "@mui/system";
import SocialLinks from "./Infos/SocialLinks";

function Footer() {
  return (
    <Container>
      <FullName>Amanda Srisourath</FullName>
      <SocialLinks />
    </Container>
  );
}

const Container = styled("div")`
  background-color: white;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  margin-top: 32px;
`;

const FullName = styled("h2")`
  margin-top: 0;
`;

export default Footer;
