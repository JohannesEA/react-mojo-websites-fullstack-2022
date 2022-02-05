import styled from "styled-components";
import { Link } from "react-scroll";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <Top>
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>
          {" "}
          <Image src="/assets/logos/mojo/mwl3.png" alt="footer-img" />{" "}
        </Link>
      </Top>

      <Bottom>
        mojo-websites.no&nbsp;
        <AiOutlineCopyrightCircle />
        &nbsp;2021
      </Bottom>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3em;
  background-color: var(--color-1);
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42vh;
`;

const Image = styled.img`
  max-height: 40vh;
`;

const Bottom = styled.div`
  background-color: var(--color-1);
  height: 5vh;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;
