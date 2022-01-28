import styled from "styled-components";
import Title from "../../components/Title";
import { Text } from "../../constants/Details";
import getWindowDimensions from "../../commonFunctions/Dimentions";
import IconBox from "../../components/IconBox";

const Services = () => {
  const { width } = getWindowDimensions();

  return (
    <Container id="services">
      {width > 800 ? (
        <>
          <Left>
            <Title color="color-2" text="Tjenester" />
            <TextContainer>
              <Text>
                Vi ønsker å gi deg den beste nettsiden til en billig penge. For
                tiden tilbyr vi 3 ulike tjenester. En informasjon/portfølje-, en
                nettbutikk- og en dynamisk nettside. Disse forskjellige type
                nettsidene har ulik vanskelighets- og kompleksitets grad, og har
                derfor ulik pris.
              </Text>{" "}
            </TextContainer>
          </Left>
          <Right>
            <IconContainer>
              <IconBox
                src="/assets/logos/icon1.png"
                alt="mojo-logo"
                text="Pris fra 9000 kr"
                title="Dynamisk"
              />
              <IconBox
                src="/assets/logos/icon2.png"
                alt="mojo-logo"
                text="Pris fra 5000 kr"
                title="Informasjon/portfølje"
              />
              <IconBox
                src="/assets/logos/icon4.png"
                alt="mojo-logo"
                text="Pris fra 12000 kr"
                title="Nettbutikk"
              />
            </IconContainer>
            {/* <ImageBox
        src="/assets/images/headshot-magnus.png"
        alt="mojo-logo"
        text="Magnus"
      /> */}
          </Right>
        </>
      ) : (
        <>
          <Left>
            <Title color="color-2" text="Tjenester" />
            <TextContainer>
              <Text>
                Vi ønsker å gi deg den beste nettsiden til en billig penge. For
                tiden tilbyr vi 3 ulike tjenester. En informasjon/portfølje-, en
                nettbutikk- og en dynamisk nettside. Disse forskjellige type
                nettsidene har ulik vanskelighets- og kompleksitets grad, og har
                derfor ulik pris.
              </Text>
            </TextContainer>
          </Left>

          <IconContainer>
            <IconBox
              src="/assets/logos/icon1.png"
              alt="mojo-logo"
              text="Pris fra 9000 kr"
              title="Dynamisk"
            />
            <IconBox
              src="/assets/logos/icon2.png"
              alt="mojo-logo"
              text="Pris fra 5000 kr"
              title="Informasjon/portfølje"
            />
            <IconBox
              src="/assets/logos/icon4.png"
              alt="mojo-logo"
              text="Pris fra 12000 kr"
              title="Nettbutikk"
            />
          </IconContainer>
        </>
      )}
    </Container>
  );
};

export default Services;

const Container = styled.div`
  margin-top: 3em;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  transition: grid-template-columns 0.3s ease;

  @media (max-width: 800px) {
    flex-direction: column;
    grid-template-rows: 1fr;
  }
`;
const Left = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  @media (max-width: 800px) {
    grid-template-rows: 1fr;
  }
`;

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin: 1em auto;
  width: 80%;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Right = styled.div`
  margin: 0;
`;

const TextContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
