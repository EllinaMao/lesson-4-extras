import "./../assets/css/Header.css";
import logo from '../assets/react.svg';

import Image from "./Image";
const Header = ({ text }) => {
  return (
      <header className="app-header">
          <Image src={logo} alt="Logo" className="logo" />
          {text}
      </header>
  );
}

export default Header;