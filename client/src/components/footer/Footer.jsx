import styled from "styled-components";
// import {Link} from "react-scroll";

const Footer = () => {
  return (
    <Container>
      <Top>
      

 
      </Top>

      <Bottom>
      </Bottom>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  background-color: #3E5916;
  color: #f2f2f2;
  flex-direction: column;
  align-items: center;
    justify-content: space-between;
    margin-top: 2em;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Bottom = styled.div`
  bottom: 0;
  width: 100%;
  margin: auto 0 0 0;
  background-color: #F28705;
  text-align: center;
`;