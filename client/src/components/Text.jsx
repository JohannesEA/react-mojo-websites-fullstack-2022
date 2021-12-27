import styled from "styled-components";
import { useState, useEffect } from "react";

const Text = ({ text, color }) => {
  const [textColor, setTextColor] = useState("");
  const COLORONE = "white";
  const COLORTWO = "black";

 
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

export default Text;

const Container = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.color};
  transition: all 0.3s ease;

  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
`;
