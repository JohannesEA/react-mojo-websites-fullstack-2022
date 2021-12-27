import styled from "styled-components";

const ImageBox = ({ src, alt, text }) => {
  return (
    <Container>
      <ImageContainer>
      <Image src={src} alt={alt} />
      </ImageContainer>
      <Text>{text}</Text>
    </Container>
  );
};

export default ImageBox;

const Container = styled.div`
  flex-direction: column;
  text-align: center;
  max-height: 20em;
  max-width: 20em;

`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
  border-radius: .5em .5em 0 0;

`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Text = styled.p`
  font-size: 1rem;
  color: var(--color-3);

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;
