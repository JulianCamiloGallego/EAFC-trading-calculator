import logo from "../assets/fc25-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo showing a money bag" />
      <h1>Trading calculator</h1>
    </header>
  );
}
