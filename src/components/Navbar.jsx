import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenuOutline, IoClose } from 'react-icons/io5';
import logo from '../assets/white-logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Menú móvil */}
      <div
        className={`bg-rich-black/10 backdrop-blur-xl w-2/3 h-screen fixed z-20 right-0 flex justify-center items-center lg:hidden transform transition-all duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        id="sm-menu"
      >
        <ul className="menu-items-mobile text-anti-flash font-regular text-lg">
          <li>
            <Link to="/" onClick={handleMenuItemClick} className='text-caribean'>Home</Link>
          </li>
          <li>
            <Link to="/services" onClick={handleMenuItemClick}>Servicios</Link>
          </li>
          <li>
            <Link to="/work" onClick={handleMenuItemClick}>Work</Link>
          </li>
          <li>
            <Link to="/testimonials" onClick={handleMenuItemClick}>Testimonios</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleMenuItemClick}>Contacto</Link>
          </li>
        </ul>
      </div>

      {/* Barra de navegación */}
      <div className="bg-gradient-to-b from-rich-black to-rich-black/0 backdrop-blur-lg w-screen h-20 flex items-center justify-between px-5 fixed z-20 ">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-10 logo" />
        </Link>

        {/* Menú de escritorio */}
        <div id="lg-menu">
          <ul className="navbar-list text-anti-flash/50 font-regular pl-5 gap-14 hidden lg:flex">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/testimonials">Testimonios</Link></li>
            <li><Link to="/contact" className='border-[1px] border-caribean py-2 px-8 rounded-md text-anti-flash font-medium hover:bg-caribean hover:text-rich-black duration-500 transition-colors' >Contacto</Link></li>
          </ul>
        </div>

        {/* Icono del menú móvil */}
        {isMenuOpen ? (
          <IoClose
            className="lg:hidden text-[40px] fill-caribean cursor-pointer"
            aria-label="Cerrar menú"
            aria-expanded="true"
            onClick={toggleMenu}
          />
        ) : (
          <IoMenuOutline
            className="lg:hidden text-[40px] stroke-caribean cursor-pointer"
            aria-label="Abrir menú"
            aria-expanded="false"
            onClick={toggleMenu}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;