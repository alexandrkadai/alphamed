import 'header.module.css';

const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src="some.jpeg" alt="logo" />
      </div>
      <div className="navBar">
        <ul>
          <li>про нас</li>
          <li>контакти</li>
          <li>послуги</li>
          <li>нашi роботи</li>
          <li>цiни</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
