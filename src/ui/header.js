import logo from '../img/logoMed.jpeg';
import classes from './header.module.css';
import Button from './button';

const Header = () => {
  return (
    <header className="w-full h-[170px] ">
      <div className="w-full h-[85px] flex justify-between">
        <img src={logo} alt="logo" className="w-[150px] h-[150px] rounded-full mt-3 ml-10" />
        <div className="flex gap-20 items-center	mr-20">
          <span className="uppercase bold text-[30px]">м.Київ, Кольцова 14Л </span>
          <span className="uppercase bold text-[30px]">096 822 31 41 </span>
          <Button text={'записатися'}></Button>
        </div>
      </div>

      <div className="bg-emerald-300 w-full h-[85px] flex items-center justify-end">
        <ul className="flex flex-row gap-10 text-[25px] uppercase mr-20">
          <li className="">про нас</li>
          <li>послуги</li>
          <li>роботи</li>
          <li>контакти</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
