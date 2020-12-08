import React from 'react';
import PropTypes from 'prop-types';

// TODO:
// - Add content
// - Add styles

const Footer = ({ className }) => {
    const BASE_CLASS_NAME = 'Footer';

    return (
        <div className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            This is the footer
        </div>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
};

Footer.defaultProps = {
    className: '',
};

export default Footer;