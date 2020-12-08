import React from 'react';
import PropTypes from 'prop-types';
import {
    HeaderContainer,
    HeaderText,
    HelperText,
} from './styles';

// TODO:
// - Add styles

const Header = ({ className }) => {
    const BASE_CLASS_NAME = 'Header';

    return (
        <HeaderContainer className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <div>
                <HeaderText>Lorem Chipsum</HeaderText>
                <HelperText>A placeholder text generator full of bleeps and bloops</HelperText>
            </div>
        </HeaderContainer>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};

Header.defaultProps = {
    className: '',
};

export default Header;