import styled from 'styled-components';
import { relaBlock } from 'frontend/styles/util';

export const GutterContainer = styled.div`
    ${relaBlock}
    width: calc(100vw - 4rem);
    max-width: 50rem;
    margin: 2rem auto;
`;

export const TextContainer = styled.div`
    ${relaBlock}
    padding: 1rem;
    border: 1px solid #aaa;
    border-radius: 4px;

    & p {
        ${relaBlock}
        color: #444;
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
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
