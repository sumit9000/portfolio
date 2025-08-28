import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

// Tip: Import Montserrat in your main index.html or as a global import:
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;400&display=swap');

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    const resumeUrl = '/Resume.pdf';
    window.open(resumeUrl);
  };

  useEffect(() => {
    if (toggle) setActive('');
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? 'flex sm:hidden' : 'hidden sm:flex'} flex-row gap-6`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`text-white hover:text-[#E93F4F] text-[20px] font-bold cursor-pointer transition-colors`}
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          onClick={() => {
            setActive(link.title);
            if (isSecondary) setToggle(false);
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      <li
        className="text-white hover:text-[#E93F4F] text-[20px] font-bold cursor-pointer transition-colors"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <button onClick={toggleResume}>Resume</button>
      </li>
    </ul>
  );

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20`}
      style={{ backgroundColor: "#6d7b8d68", fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          {/* Update logo or brand here if needed */}
          <p
            className="text-white text-[20px] font-extrabold cursor-pointer flex"
            style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '.5px' }}
          >
            Pranay&nbsp;
            <span className="sm:block hidden">Kumar</span>
          </p>
        </Link>
        {renderNavLinks(false)}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[18px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${
              toggle ? 'flex' : 'hidden'
            }`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {renderNavLinks(true)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
