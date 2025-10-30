import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/technopedia_logo.png";
import menu_icon from "../../assets/menu_icon.png"
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setmobileMenu]= useState(false);

  const toggleMenu = ()=>{
    mobileMenu ? setmobileMenu(false) : setmobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""} `}>
     <Link to="home" smooth={true} duration={500} offset={-100} spy={true}
          activeClass="active"> <img src={logo} alt="Application logo" className="logo" />  </Link>

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link className="react-scroll-link" to="home" smooth={true} duration={500} offset={-100} spy={true}
          activeClass="active"> Home  </Link> </li>
        <li><Link className="react-scroll-link" to="program" smooth={true} duration={500} offset={-290} spy={true}
          activeClass="active"> Program </Link> </li>
        <li><Link className="react-scroll-link" to="about" smooth={true} duration={500} offset={-150} spy={true}
          activeClass="active"> About Us </Link> </li>
        <li><Link className="react-scroll-link" to="gallery" smooth={true} duration={500} offset={-280} spy={true}
          activeClass="active"> Gallery </Link> </li>
        <li><Link className="react-scroll-link" to="testimonials" smooth={true} duration={500} offset={-270} spy={true}
          activeClass="active"> Testimonials </Link> </li>
        <li>
          <Link className="btn react-scroll-btn" to="contact" smooth={true} duration={500} offset={-250} spy={true}
            activeClass="active"><span className="react-scroll-text">Contact Us</span> </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
