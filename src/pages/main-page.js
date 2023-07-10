import { Fragment } from 'react';

import Header from '../ui/header';
import FirstSection from '../components/first-section';
import SecondSection from '../components/second-section';
import ThirdSection from '../components/third-section';


const MainPage = () => {
    return (
        <Fragment>
        <Header />
        <FirstSection />
        <SecondSection/>
        <ThirdSection/>
        </Fragment>
    )
};

export default MainPage;

