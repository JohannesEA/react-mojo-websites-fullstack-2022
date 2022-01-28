import styled from "styled-components";
import ImageBox from "../../components/ImageBox";
import Title from "../../components/Title";
import { Text } from "../../constants/Details";
import Button from "../../components/Button";
import getWindowDimensions from "../../commonFunctions/Dimentions";
import { Link } from "react-scroll";

const About = () => {
  const { width } = getWindowDimensions();

  return (
    <Container id="about">
      {width > 800 ? (
        <>
          <Left>
            <Title color="color-2" text="Om Oss" />
            <TextContainer>
              <Text>
                Dette er et startup prosjekt som går ut på å lage enkle og svært
                fungerende hjemmesider for de som ønsker det. Jeg går siste året
                på studiet for å bli dataingeniør ved OsloMet.
              </Text>
            </TextContainer>
            <ButtonContainer>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                <Button text="Kontakt Oss" bc="color-2" />
              </Link>
            </ButtonContainer>
          </Left>
          <Right
            onClick={() =>
              (window.location.href = "https://johanneseandresen.netlify.app/")
            }
          >
            <ImageBox
              src="/assets/images/headshot-johannes.jpg"
              alt="mojo-logo"
              text="Johannes"
            />
            {/* <ImageBox
        src="/assets/images/headshot-magnus.png"
        alt="mojo-logo"
        text="Magnus"
      /> */}
          </Right>
        </>
      ) : (
        <>
          <Right
            onClick={() =>
              (window.location.href = "https://johanneseandresen.netlify.app/")
            }
          >
            <Title color="color-2" text="Om Oss" />

            <ImageBox
              src="/assets/images/headshot-johannes.jpg"
              alt="mojo-logo"
              text="Johannes"
            />
            {/* <ImageBox
        src="/assets/images/headshot-magnus.png"
        alt="mojo-logo"
        text="Magnus"
      /> */}
          </Right>
          <Left>
            <TextContainer>
              <Text>
                Dette er et startup prosjekt som går ut på å lage enkle og svært
                fungerende hjemmesider for de som ønsker det. Jeg går siste året
                på studiet for å bli dataingeniør ved OsloMet.
              </Text>
            </TextContainer>
            <ButtonContainer>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                <Button text="Kontakt Oss" bc="color-2" />
              </Link>{" "}
            </ButtonContainer>
          </Left>
        </>
      )}
    </Container>
  );
};

export default About;

const Container = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  transition: grid-template-columns 0.3s ease;

  /* grid-column-gap: 50px; */

  @media (max-width: 800px) {
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`;
const Left = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  @media (max-width: 800px) {
    grid-template-rows: 1fr;
  }
`;

const ButtonContainer = styled.div`
  margin: 1em auto;
`;

const Right = styled.div`
  text-align: center;
  margin-top: 1em;
`;

const TextContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
