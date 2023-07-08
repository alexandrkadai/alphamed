import classes from  './second-section.module.css';

const SecondSection = () => {
  return (
    <section className={classes.secondSection}>
      <h2>Наші Послуги</h2>

    <div className={classes.cardsWrapper}>
      <div className={classes.serviceCard}>
        <p>Хірургічна Стоматологія</p>
        <img alt="Karies" src="Somesrc.jpeg" />
      </div>

      <div className={classes.serviceCard}>
        <p>Ортопедія та протезування</p>
        <img alt="Karies" src="Somesrc.jpeg" />
      </div>

      <div className={classes.serviceCard}>
        <p>Терапевтична Стоматологія</p>
        <img alt="Karies" src="Somesrc.jpeg" />
      </div>

      <div className={classes.serviceCard}>
        <p>Ортодонтія</p>
        <img alt="Karies" src="Somesrc.jpeg" />
      </div>

      <div className={classes.serviceCard}>
        <p>Дитяча Стоматологія</p>
        <img alt="Karies" src="Somesrc.jpeg" />
      </div>

      </div>

      <p>Diznatusja Bilshe</p>
    </section>
  );
};

export default SecondSection;
