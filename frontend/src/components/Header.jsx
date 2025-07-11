import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">Nanda Kumar</a>
      <div className="navbar-nav">
        <a className="nav-link" href="#hero">Home</a>
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#resume">Resume</a>
        <a className="nav-link" href="#portfolio">Portfolio</a>
        <a className="nav-link" href="#services">Services</a>
        <a className="nav-link" href="#contact">Contact</a>
      </div>
    </nav>
  );
}
export default Header;
