import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import About from "./About";
import Hero from "./Hero";
import Services from "./Services";


const Home = () => {
    return (
        <Container>
            <Navbar/>
            <Hero/>
            <About/>
            <Services/>
            
            
        </Container>
    )
}

export default Home;

const Container = styled.div``;
