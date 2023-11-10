import Button from '../ui/button';

import tooth from '../img/tooth.jpeg';
import classes from  './second-section.module.css';

const SecondSection = () => {
  return (
    <section className={classes.secondSection}>
      <h2 className="text-[40px] font-bold">Послуги Стоматології</h2>
      

    <div className={classes.cardsWrapper}>
      <div className={classes.serviceCard}>
        <p>Хірургічна Стоматологія</p>
        <img alt="Karies" src={tooth} />
      </div>

      <div className={classes.serviceCard}>
        <p>Ортопедія та протезування</p>
        <img alt="Karies" src={tooth} />
      </div>

      <div className={classes.serviceCard}>
        <p>Терапевтична Стоматологія</p>
        <img alt="Karies" src={tooth} />
      </div>

      <div className={classes.serviceCard}>
        <p>Ортодонтія</p>
        <img alt="Karies" src={tooth} />
      </div>
      <div className={classes.serviceCard}>
        <p>Ендодонтія</p>
        <img alt="Karies" src={tooth} />
      </div>

      <div className={classes.serviceCard}>
        <p>Дитяча Стоматологія</p>
        <img alt="Karies" src={tooth} />
      </div>

      <div className={classes.serviceCard}>
      <p>Естетична Стоматологія</p>
      <img alt="Karies" src={tooth} />
    </div>

      </div>

    </section>
  );
};

export default SecondSection;
