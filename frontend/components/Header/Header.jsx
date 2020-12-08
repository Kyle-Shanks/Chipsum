import React from 'react';
import {
    HeaderContainer,
    HeaderText,
    HelperText,
} from './styles';

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

export default Header;
