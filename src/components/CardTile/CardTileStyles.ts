import {css} from "@emotion/core";

export const baseStyle = css`
    -webkit-appearance: none;
    border: 0;
    perspective: 1000px;
`;


export const flipperStyle = css`
    height: 100px;
    position: relative;
    transform-style: preserve-3d;
    transition: 0.6s;
    width: 75px;
`;

export const flipperFlippedStyle = css`
    ${flipperStyle};
    transform: rotateY(180deg);
`;


export const sideStyle = css`
    backface-visibility: hidden;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    border-radius: .2rem;
`;

export const frontSideStyle = css`
    z-index: 2;
    background-color: #6ffdff;
    transform: rotateY(180deg);
`;

export const validStyle = css`
    background-color: lightgreen;
`;

export const backSideStyle = css`
    background-color: #cdcdcd;
    transform: rotateY(0deg);
`;
