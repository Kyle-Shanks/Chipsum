import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// TODO:
// - Add content
// - Add styles

const Header = ({ className }) => {
    const BASE_CLASS_NAME = 'Header';

    return (
        <div className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            This is the header
        </div>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};

Header.defaultProps = {
    className: '',
};

export default Header;