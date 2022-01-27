import styled from "styled-components";

const ImageBox = ({ src, alt, text, title }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={src} alt={alt} />
      </ImageContainer>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};

export default ImageBox;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  color: var(--color-3);
  border-radius: 0.5em;
  box-shadow: 0px 0px 4px 2px var(--color-hover);
  padding: 0.5em;
  transition: all 0.3s ease;

  &:hover {
    color: black;
    border-radius: 0em;
  }

  @media (max-width: 800px) {
    margin: 1em auto;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  border-radius: 0.5em 0.5em 0 0;
`;

const Image = styled.img`
  max-height: 8em;
  max-width: 8em;
  border-radius: 0.5em 0.5em 0 0;

  @media (max-width: 800px) {
    max-height: 6em;
    max-width: 6em;
  }

  @media (max-width: 400px) {
    max-height: 4em;
    max-width: 4em;
  }

  @media (max-width: 300px) {
    max-height: 2em;
    max-width: 2em;
  }
`;

const Text = styled.p`
  font-size: 1rem;

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

const Title = styled.h1`
  font-size: 1.2rem;

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;
