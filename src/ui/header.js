import classes from './header.module.css';

const Header = () => {
  return (
    <header>
    <div className={classes.upperbar}>
      <div className={classes.logo}>
        <img src="../../public/logo192.png" alt="logo" />
      </div>
      <div><span>044 432 32 11</span></div>
      <div><span>Адресс Бульвар Кольцова 14Л</span></div>
      <div><span>Записаться На прийом</span></div>
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
