import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import About from "./About";
import Hero from "./Hero";


const Home = () => {
    return (
        <Container>
            <Navbar/>
            <Hero/>
            <About/>
            
        </Container>
    )
}

export default Home;

const Container = styled.div``;
