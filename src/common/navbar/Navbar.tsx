import logo from '../../assets/logo.png';
import { NavbarStyled } from './Navbar.styles';

const Navbar: React.FC = () => {
  return (
    <NavbarStyled>
      <img src={logo} alt="pizza logo" />
      <div>
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/reservation">Reservation</a>
        <a href="/contact">Contact</a>
      </div>
    </NavbarStyled>
  );
};

export { Navbar };

