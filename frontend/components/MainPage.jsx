import React from 'react';
import PropTypes from 'prop-types';
import Generator from 'frontend/components/Generator';

const MainPage = ({ className }) => {
    const BASE_CLASS_NAME = 'MainPage';

    // TODO
    // - Need a header component
    // - Need a dropdown component to select the number of paragraphs
    // - Need a generator component
    // - Need a footer component

    return (
        <div className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            testing again
            <Generator />
        </div>
    );
};

MainPage.propTypes = {
    className: PropTypes.string,
};

MainPage.defaultProps = {
    className: '',
};

export default MainPage;
