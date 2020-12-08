import styled from 'styled-components';
import { relaBlock } from 'frontend/styles/util';

export const HeaderContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 16rem;
    padding: 2rem;
    background-color: rgba(0,0,0,0.1);
    text-align: center;
`;

export const HeaderText = styled.h1`
    ${relaBlock}
    font-family: 'Comfortaa', sans-serif;
    font-size: 2rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
`;

export const HelperText = styled.h3`
    ${relaBlock}
    font-family: 'Comfortaa', sans-serif;
    font-size: 1.25rem;
    color: #888;
`;
