"use client";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header"> 
      <button
        title="Menu"
        onClick={onClickHandler}
        className="menuButton" 
      >

          {isOpen ? (
         <span className="icon">
         <FaTimes size={25} />
         </span>
        ) : (
        <span className="icon">
        <FaBars size={25} />
         </span>
         )}
      </button>

      <div className="logo">
        <h2 className="logoText">
          Kashaf.</h2>
      </div>

      <nav className="navDesktop">
        <Link href="/" className="navLink">
          Home
        </Link>
        <Link href="/about" className="navLink">
          About
        </Link>
        <Link href="/skills" className="navLink">
          Skills
        </Link>
        <Link href="/education" className="navLink">
          Education
        </Link>
        <Link href="/contact" className="navLink">
          Contact
        </Link>
      </nav>

      {isOpen && (
        <nav className="navMobile">
          <ul className="mobileList">
            <li>
              <Link href="/" className="navLink">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="navLink">
                About
              </Link>
            </li>
            <li>
              <Link href="/skills" className="navLink">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/education" className="navLink">
                Education
              </Link>
            </li>
            <li>
              <Link href="/contact" className="navLink">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
