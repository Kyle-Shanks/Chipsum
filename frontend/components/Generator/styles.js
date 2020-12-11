import styled from 'styled-components';
import { relaBlock } from 'frontend/styles/util';

export const GutterContainer = styled.div`
    ${relaBlock}
    width: calc(100vw - 4rem);
    max-width: 60rem;
    margin: 2rem auto 4rem;
`;

export const TextContainer = styled.div`
    ${relaBlock}
    padding: 2rem 2rem 4rem;
    border: 1px solid #333333;
    border-radius: 4px;

    & p {
        ${relaBlock}
        line-height: 1.4;
    }

    & p + p {
        margin-top: 0.75rem;
    }
`;

export const ParagraphSelect = styled.select`
    ${relaBlock}
    margin: auto;
    padding: 0.5rem;
    margin-bottom: 2rem;
    border: 1px solid #333333;
    border-radius: 4px;
    &:hover {
        border: 1px solid #888888;
    }
`;

export const CopyButton = styled.button`
    position: absolute;
    bottom: 1.25rem;
    right: 2rem;
    background-color: #c6076c;
    padding: 0.5rem;
    font-size: 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.1s ease;

    &:hover {
        background-color: #eb75c4;
    }

    &:active {
        background-color: #c6076c;
        transform: translateY(1px);
    }
`;
