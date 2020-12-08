import React from 'react';
import { FooterContainer } from './styles';

const Footer = ({ className }) => {
    const BASE_CLASS_NAME = 'Footer';

    return (
        <FooterContainer className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            This is the footer
        </FooterContainer>
    );
};

export default Footer;
