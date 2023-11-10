import classes from './fourth-section.module.css';
import {doctor} from '../img';
const FourthSection = () => {
  return (
    <div className={classes.main}>
      <h2 className={classes.title}>наша команда</h2>

      <div className={classes.cardswrapper}>

        <div className={classes.card}>
          <img src={doctor} alt="doctor one" />
          <span>Степан Думний</span>
          <p>Це найкращий доктор в світі</p>
        </div>

        <div className={classes.card}>
          <img src={doctor} alt="doctor one" />
          <span>Степан Думний</span>
          <p>Це найкращий доктор в світі</p>
        </div>

        <div className={classes.card}>
          <img src={doctor} alt="doctor one" />
          <span>Степан Думний</span>
          <p>Це найкращий доктор в світі</p>
        </div>

        <div className={classes.card}>
          <img src={doctor} alt="doctor one" />
          <span>Степан Думний</span>
          <p>Це найкращий доктор в світі</p>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
