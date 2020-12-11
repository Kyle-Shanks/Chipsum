import React from 'react';
import { FooterContainer } from './styles';

const Footer = ({ className }) => {
    const BASE_CLASS_NAME = 'Footer';

    return (
        <FooterContainer className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            Made by KJ Shanks. View code on <a href="https://github.com/Kyle-Shanks/Chipsum">GitHub</a>.
        </FooterContainer>
    );
};

export default Footer;
