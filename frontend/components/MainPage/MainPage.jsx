import React from 'react';
import Header from 'frontend/components/Header';
import Footer from 'frontend/components/Footer';
import Generator from 'frontend/components/Generator';

const MainPage = ({ className }) => {
    const BASE_CLASS_NAME = 'MainPage';

    return (
        <div className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Header />
            <Generator />
            <Footer />
        </div>
    );
};

export default MainPage;
