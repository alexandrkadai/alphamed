import classes from  './third-section.module.css';
import work1 from '../img/work1.jpeg'
import work2 from '../img/work2.jpeg'
import work3 from '../img/work3.jpeg'
import work4 from '../img/work4.jpeg'
import work5 from '../img/work5.jpeg'

const ThirdSection = () => {
  return (
    <section className={classes.mainSec}>
      <h2 className={classes.sectionText}>Наші Роботи</h2>

      <div className={classes.wrapperone}>
      <img src={work1} alt='works'/>
      <img src={work2} alt='works'/>
      <img src={work3} alt='works'/>
      </div>

      <div className={classes.wrappertwo}>
     
      <img src={work4} alt='works'/>
      <img src={work5} alt='works'/>
      </div>

    </section>
  );
};

export default ThirdSection;
