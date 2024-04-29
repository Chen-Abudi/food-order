import Button from "./UI/Button.jsx";
import headerLogo from "../assets/logo.jpg";

function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={headerLogo} alt="A restaurant logo" />
        <h1>Quick Bite</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}

export default Header;
