import { useState, useEffect } from "react";
import styled from "styled-components";

const Button = ({
    text,
    btnOnClick,
    bc,
}) => {
    const [BACKGROUND_COLOR, setBACKGROUNDCOLOR] = useState("");
    const [COLOR, setCOLOR] = useState("");
    const [HOVER_COLOR, setHOVERCOLOR] = useState("");
    const BACKGROUND_COLOR_ONE = "#594AE3";
    const COLOR_ONE = "white";
    const HOVERCOLOR_ONE = "#6354e7";
    const BACKGROUND_COLOR_TWO = "#FFF";
    const COLOR_TWO = "#594AE3";
    const HOVERCOLOR_TWO = "#eeeded";
    const BACKGROUND_COLOR_THREE = "red";
    const COLOR_THREE = "white";
    const HOVERCOLOR_THREE  = "#ff7b7b";

    useEffect(() => {
        const handleColor = () => {
            if (bc === "color-2") {
                setBACKGROUNDCOLOR(BACKGROUND_COLOR_ONE);
                setCOLOR(COLOR_ONE);
                setHOVERCOLOR(HOVERCOLOR_ONE);
                console.log("background: ".BACKGROUND_COLOR);
            } else if (bc === "color-1") {
                setBACKGROUNDCOLOR(BACKGROUND_COLOR_TWO);
                setCOLOR(COLOR_TWO);
                setHOVERCOLOR(HOVERCOLOR_TWO);
            }
            else{
                setBACKGROUNDCOLOR(BACKGROUND_COLOR_THREE);
                setCOLOR(COLOR_THREE);
                setHOVERCOLOR(HOVERCOLOR_THREE);
            }
        };

        handleColor();
    }, [BACKGROUND_COLOR, COLOR, HOVER_COLOR]);

    return (
        <MyButton
            onClick={btnOnClick}
            backgroundcolor={BACKGROUND_COLOR}
            hover={HOVER_COLOR}
            color={COLOR}
        >
            {text}
        </MyButton>
    );
};

export default Button;

const MyButton = styled.button`
    font-size:1rem;
    font-weight:500;
    z-index: 1;
    border-radius: .5em;
    transition: all 0.2s ease;
    cursor: pointer;
    border: none;
    background-color: ${(prop) => prop.backgroundcolor};
    color: ${(prop) => prop.color};
    padding: 10px 14px;
    &:hover {
        background-color: ${(prop) => prop.hover};
        border-radius: 0em;
    }
    @media (max-width: 400px) {
        padding: 8px 12px;
    }
`;