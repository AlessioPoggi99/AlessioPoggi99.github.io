import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

import { SITE_AUTHOR } from "../consts";
import "../styles/header.css";

export default function Header() {
  const author = SITE_AUTHOR.toUpperCase();

  const [isHomePage, setIsHomePage] = useState<null | boolean>(null);

  const logoStyle =
    "logo-container relative pl-[44px] nav-text-hover font-bold flex items-center !m-0";
  const logoContent = (
    <>
      <img className="logo" src="/logo.png" alt="logo" />
      <img className="logo" src="/logo-hover.png" alt="logo" />
      {author}
    </>
  );

  const menuLinks = [
    ["blog", "Blog"],
    ["about", "About me"],
    ["contacts", "Contacts"],
  ];
  const [navStripStyle, setNavStripStyle] = useState({
    left: "0",
    opacity: "0",
  });

  const handleMenuSetActive = (toIndex: number) => {
    setNavStripStyle({
      left: `calc((100% * ${toIndex}) + (16px * ${toIndex}))`,
      opacity: "1",
    });
  };

  const handleMenuSetInactive = (index: number) => {
    if (index == 0) setNavStripStyle({ left: "0", opacity: "0" });
  };

  useEffect(() => {
    menuLinks.forEach((link, index) => {
      if (`#${link[0]}` === window.location.hash) handleMenuSetActive(index);
      else handleMenuSetInactive(index);
    });
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") setIsHomePage(true);
    else setIsHomePage(false);
  }, [window.location.pathname]);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-inner wrapper">
          {/*** LOGO ***/}
          {isHomePage ? (
            <Link
              className={logoStyle}
              to={"home"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              hashSpy={true}
              href={`/#home`}
            >
              {logoContent}
            </Link>
          ) : (
            <a href="/#home" className={logoStyle}>
              {logoContent}
            </a>
          )}

          {/*** MENU ***/}
          <ul
            id="nav-desktop-menu"
            className="grid grid-flow-col auto-cols-fr text-center gap-x-4 !m-0"
          >
            {menuLinks.map((link, index) => (
              <li className="relative" key={link[0]}>
                {index == 0 ? (
                  <div id="nav-strip" style={navStripStyle}></div>
                ) : (
                  ""
                )}
                {isHomePage ? (
                  <Link
                    className="nav-text-hover"
                    activeClass="nav-active"
                    onSetActive={() => handleMenuSetActive(index)}
                    onSetInactive={() => handleMenuSetInactive(index)}
                    to={link[0]}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={300}
                    hashSpy={true}
                    href={`/#${link[0]}`}
                  >
                    {link[1]}
                  </Link>
                ) : (
                  <a href={`/#${link[0]}`} className="nav-text-hover">
                    {link[1]}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <MobileMenu menuLinks={menuLinks} isHomePage={isHomePage} />
        </div>
      </nav>
    </header>
  );
}

function MobileMenu({ menuLinks, isHomePage }) {
  const [isOpen, setOpen] = useState(false);

  const menu = {
    hidden: { scale: 0, transition: { delay: 0.15 } },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { x: -16, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    transition: { opacity: { duration: 0.2 } },
  };

  return (
    <div id="nav-mobile-menu">
      <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
      {isOpen ? (
        <div className="bg-menu-layer" onClick={() => setOpen(false)}></div>
      ) : (
        ""
      )}
      <motion.ul
        animate={isOpen ? "visible" : "hidden"}
        variants={menu}
        initial="hidden"
      >
        <svg display="block" viewBox="0 0 30 30">
          <g transform="rotate(0 15 15)">
            <path
              fill="none"
              d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"
            ></path>
            <path
              stroke="none"
              d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"
            ></path>
          </g>
        </svg>
        {menuLinks.map((link, index) => (
          <motion.li key={link[0]} variants={item}>
            {isHomePage ? (
              <Link
                onClick={() => setOpen(false)}
                className="nav-text-hover"
                activeClass="nav-active"
                to={link[0]}
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
                hashSpy={true}
                href={`/#${link[0]}`}
              >
                {link[1]}
              </Link>
            ) : (
              <a href={`/#${link[0]}`} className="nav-text-hover">
                {link[1]}
              </a>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
