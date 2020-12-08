import React from 'react';
import PropTypes from 'prop-types';
import { FooterContainer } from './styles';

// TODO:
// - Add content
// - Add styles

const Footer = ({ className }) => {
    const BASE_CLASS_NAME = 'Footer';

    return (
        <FooterContainer className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            This is the footer
        </FooterContainer>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
};

Footer.defaultProps = {
    className: '',
};

export default Footer;