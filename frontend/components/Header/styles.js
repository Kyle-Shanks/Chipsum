import styled from 'styled-components';
import { relaBlock } from 'frontend/styles/util';

export const HeaderContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 4rem 4rem 6rem;
    text-align: center;
    background-color: #181818;
    background-image: linear-gradient(
        -45deg, #0c0c0c 25%,
        #181818 25%, #181818 50%,
        #0c0c0c 50%, #0c0c0c 75%,
        #181818 75%, #181818 100%
    );
    background-size: 3rem 3rem;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(0deg, #0c0c0c, transparent);
    }
`;

export const HeaderSvg = styled.svg`
    ${relaBlock}
    height: 132px;
    width: 132px;
    margin: 0 auto;
    stroke-width: 1.5;
    stroke: #03bffc;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
`;

export const HeaderText = styled.h1`
    ${relaBlock}
    font-family: 'PressStart2P', sans-serif;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #ffffff;
`;

export const HelperText = styled.h3`
    ${relaBlock}
    font-size: 1.25rem;
`;
