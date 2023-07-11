import { Fragment } from 'react';
import Button from '../ui/button';

import about from '../img/aboutClinique.jpeg'
import classes from './first-section.module.css';

const FirstSection = () => {
  return (
    <Fragment>
      <section className={classes.firstsection}>
        <div className={classes.greeting}>
         
      <Button text={'Записатися на прийом'}/>
        </div>

        <div className={classes.clinique}>
       
      <img src={about} alt="about"/>
        <p>
        <h3>Стоматологічний центр "Альфамед"</h3><span> </span>надає всі види стоматологічних послуг з гарантією якості за демократичними цінами - протезування, ортопедія, терапія, ортодонтія, пародонтологія, імплантологія.
        Лікування зубів без болю, відбілювання зубів. Досвідчені лікарі стоматологи і сучасні медичні технології.
        Здорові зуби - красива посмішка! </p>
        </div>
      </section>
    </Fragment>
  );
};

export default FirstSection;
