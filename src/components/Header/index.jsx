import Logo from "../../objects/Logo";
import Sobre from "../../objects/Sobre";
import Menu from "../../objects/Menu";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Sobre />
      <Menu />
    </header>
  );
};

export default Header;
