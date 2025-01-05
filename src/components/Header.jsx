import logo from "../assets/fc25-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="EAFC 25 Logo" />
      <h1>Trading calculator</h1>
    </header>
  );
}
