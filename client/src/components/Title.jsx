import styled from "styled-components";
import { useState, useEffect } from "react";

const Title = ({ text, color }) => {
  const [textColor, setTextColor] = useState("");
  const COLORONE = "black";
  const COLORTWO = "#594AE3";

 
  useEffect(() => {
      const setColor = () => {
        if (color === "color-1") {
            setTextColor(COLORONE);
          } else if (color === "color-2") {
            setTextColor(COLORTWO);
          } else{
            setTextColor(color);
          }
      }
      setColor();
  }, [textColor]);



  return <Container color={textColor}>{text}</Container>;
};

export default Title;

const Container = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.color};
  transition: all 0.3s ease;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;