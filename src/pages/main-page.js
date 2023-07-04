import { Fragment } from 'react';

import Header from '../ui/header';
import FirstSection from '../components/first-section';
import SecondSection from '../components/second-section';


const MainPage = () => {
    return (
        <Fragment>
        <Header />
        <FirstSection />
        <SecondSection/>
        </Fragment>
    )
};

export default MainPage;

