import about from '../img/aboutClinique.jpeg';
import { clinik } from '../img';
import classes from './first-section.module.css';
import { openHours } from '../Constants/index';

const FirstSection = () => {
  return (
    <section className={classes.firstsection}>
      <div className="w-full">
        <h3 className="text-[30px] font-bold text-[#039de3]">"Альфамед"</h3>
        <h2 className="text-[35px] font-bold border-b-4 border-sky-300">
          Стоматологічний центр
          <br />
          Доступний кожному
        </h2>

        <div className={classes.clinique}>
          <p>
            Наша клініка надає всі види стоматологічних послуг з гарантією якості за демократичними
            цінами - протезування, ортопедія, терапія, ортодонтія, пародонтологія, імплантологія.
            Лікування зубів без болю, відбілювання зубів. Досвідчені лікарі стоматологи і сучасні
            медичні технології. <br />
            <b>Здорові зуби - красива посмішка!</b>
          </p>
        </div>
      </div>

      <div className={classes.hours}>
        <img className={classes.imgHours} src={clinik} />
        <div className={classes.tableHours}>
          <table>
            <th className="pb-[20px]">Години Роботи</th>
            
            {openHours.map((item) => (
              <tr>
                <td>{item.name}</td>
                
                <td >{item.timeFr}</td>
                -
                <td>{item.timeTo}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
