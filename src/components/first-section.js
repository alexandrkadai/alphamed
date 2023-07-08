import { Fragment } from 'react';
import about from '../img/aboutClinique.png'
import classes from './first-section.module.css';

const FirstSection = () => {
  return (
    <Fragment>
      <section className={classes.firstsection}>
        <div className={classes.greeting}>
          <h2 className={classes.mainText}>
            Даруємо неповторні <br /> посмішки
          </h2>
        </div>

        <div className={classes.clinique}>
      <img src={about} alt="about"/>
        <p>Стоматологічний центр "Альфамед" надає всі види стоматологічних послуг з гарантією якості за демократичними цінами - протезування, ортопедія, терапія, ортодонтія, пародонтологія, імплантологія.
        Лікування зубів без болю, відбілювання зубів. Досвідчені лікарі стоматологи і сучасні медичні технології.
        Здорові зуби - красива посмішка! </p>
        </div>
      </section>
    </Fragment>
  );
};

export default FirstSection;
