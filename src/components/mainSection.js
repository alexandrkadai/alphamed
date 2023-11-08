
import classes from './mainSection.module.css';

const MainSection = () => {
  return (
    <section className={classes.mainHeader}>
      <div className={classes.upperbar}>
        <div className={classes.logoText}>
          <span className={classes.centName}>alphamed</span>
          <br />
          <span className={classes.centAbout}>сучасна стоматолонічна клініка</span>
        </div>

        <div className={classes.contacsQuick}>
          <span>Дбаємо про ваші посмішки</span>

        </div>
      </div>
    </section>
  );
};

export default MainSection;
