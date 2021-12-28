import styled from "styled-components";
import {IMAGES} from "../../data/data";
import ImageSlider from "../../components/imageslider/ImageSlider";
import Title from "../../components/Title"


const Portfolio = () => {

  return (
<Container id="portfolio">

  <Title color="color-2" text="Portfølje" data-aos="fade-up"></Title>

        <ImageContainer id="projects" data-aos="fade-up">
        <ImageSlider images={IMAGES} slidesToShow={5} />
      </ImageContainer>


</Container>

  );

};

export default Portfolio;

const Container = styled.div`
margin-top:3em;
flex-direction: column;
text-align: center;
`;


const ImageContainer = styled.div`
    padding: 0;
    transition: all .3s ease;
`;


