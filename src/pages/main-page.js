import { Fragment } from 'react';

import Header from '../ui/header';
import MainSection from '../components/mainSection';
import FirstSection from '../components/first-section';
import SecondSection from '../components/second-section';
import ThirdSection from '../components/third-section';
import  FourthSection from '../components/fourth-section';
import Appointment from '../components/Appointment';

const MainPage = () => {
  return (
    <Fragment>
      <Header />
      <MainSection/>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection/>
      <Appointment/>
    </Fragment>
  );
};

export default MainPage;
