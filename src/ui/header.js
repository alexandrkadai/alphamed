import logo from '../img/logoMed.jpeg';
import classes from './header.module.css';

const Header = () => {
  return (
    <header className={classes.mainHeader}> 

      <div className={classes.upperbar}>

        <div className={classes.logoText}>
          <span className={classes.centName}>alphamed</span>
          <br/>
          <span className={classes.centAbout}>сучасна стоматолонічна клініка</span>
        </div>
   
        <div className={classes.contacsQuick}>
          <span>096 822 31 41 ::</span>
          
          <span> Кольцова 14Л</span>
        </div>

       
      </div>
    
    
     
    </header>
  );
};

export default Header;
