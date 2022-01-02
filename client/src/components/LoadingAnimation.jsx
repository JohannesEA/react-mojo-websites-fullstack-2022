import styled, {keyframes} from "styled-components";
import {
    FaHourglassEnd
} from "react-icons/fa";

const LoadingAnimation = () => {
  return (
    <Container>

        <FaHourglassEnd fontSize={30}/>
     
    </Container>
  );
};

export default LoadingAnimation;

const AnimationOne = keyframes`
0%{
    color: var(--color-1);
}
50%{
    color: #6354e7;

}
100%{
    color: var(--color-1);
}

`;

const AnimationTwo = keyframes`
    100% {
      transform: rotate(360deg);
    }
`;




const Container = styled.div`
height: auto;
width: auto;
animation: ${AnimationOne} 2s linear infinite, ${AnimationTwo} 2s linear infinite;
`;

