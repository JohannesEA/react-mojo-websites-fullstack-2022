import styled from "styled-components";
const Box = ({ height,title, icon, text, list, point1, point2, point3, point4 }) => {
  return (
    <Container height={height}>
      <Title>{title}</Title>
      <Icon>{icon}</Icon>
      <Text>{text}</Text>

{list &&        <PointBox>
          <Point >{point1}</Point>
          <Point >
           {point2}
          </Point  >
          <Point >{point3}</Point>
          <Point >{point4}</Point>
        </PointBox>}
 

    </Container>
  );
};

export default Box;

const Container = styled.div`
  flex: 1;
  margin: 0.5em;
  align-items: center;
  justify-content: center;
  border-radius: 0.5em;
  box-shadow: 0px 0px 20px 1px #f2f2f2;
  padding: 2em;
  text-align: center;
  height: ${props => props.height};
  @media (max-width: 800px) {
    flex-direction: column;
    width: 90%;
    height: auto;
    padding: 0;
  }
  &:hover {
    background-color: #f2f2f2;
  }
`;
const Title = styled.h1`
  color: black;
  font-size: 1.5rem;
  font-weight: 500;
`;
const Icon = styled.div`
  text-align: center;
  color: #F28705;
`;
const Text = styled.p`
  color: black;
  font-size: 1.5rem;
  font-weight: 500;
`;

const PointBox = styled.ul`
  flex-direction: column;
  text-align: left;
`;
const Point = styled.li`
  list-style-type: circle;
  color: black;
  font-weight: 400;
  font-size: 1.3rem;
  padding: 2px 0;
`;