import logo from '../img/logoMed.jpeg';
import classes from './header.module.css';

const Header = () => {
  return (
    <header> 

      <div className={classes.upperbar}>

        <div className={classes.logoText}>
          <img className={classes.logoImg} src={logo} alt="logo" />
 
        </div>
   
        <div>
          
          
          <span>096 822 31 41</span>
      <br/>
          <span>Бульвар Кольцова 14Л</span>
        </div>

       
      </div>
      <nav className={classes.navBar}>
    <ul>
      <li>про клініку</li>
      <li>контакти</li>
      <li>послуги</li>
      <li>нашi роботи</li>
      <li>цiни</li>
    </ul>
  </nav>
    
     
    </header>
  );
};

export default Header;
