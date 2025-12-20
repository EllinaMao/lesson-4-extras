import "./../assets/css/Header.css";

const Header = ({ children }) => {
  return (
      <header className="app-header">
          {children}
      </header>
  );
}

export default Header;