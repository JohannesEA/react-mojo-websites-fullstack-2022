import styled from "styled-components";
import Title from "../../components/Title";
import ImageBox from "../../components/ImageBox";


const Hero = () => {
    return (
        <Container>
            <Title color="color-2" text="MoJo Websites" />
            <ImageBox src="/assets/logos/mojo-logo2.png" alt="mojo-logo" text="MOjo"/>
        </Container>
    )
}

export default Hero;

const Container = styled.div``;
