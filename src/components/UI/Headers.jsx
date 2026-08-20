import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const navLinkClass = ({ isActive }) =>
  `relative block rounded-xl px-4 py-2.5 font-mono text-xs font-medium uppercase tracking-widest transition-all duration-300 md:rounded-none md:px-1 md:py-1 ${
    isActive
      ? "bg-brass/15 text-brass shadow-inner md:bg-transparent md:text-brass md:shadow-none md:after:absolute md:after:-bottom-2 md:after:left-0 md:after:h-[2px] md:after:w-full md:after:rounded-full md:after:bg-brass md:after:shadow-[0_0_8px_rgba(212,175,55,0.8)]"
      : "text-muted hover:bg-surface-2/80 hover:text-parchment md:hover:bg-transparent md:hover:text-brass-light"
  }`;

const Headers = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    setShow((prev) => !prev);
  };

  const closeMenu = () => setShow(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brass/20 bg-ink/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div>
            <NavLink to="/" className="group inline-block">
              <h1 className="font-display text-2xl italic tracking-wider transition-transform duration-300 group-hover:scale-105 sm:text-3xl">
                World
                <span className="not-italic text-brass transition-colors duration-300 group-hover:text-brass-light">
                  Atlas
                </span>
              </h1>
            </NavLink>
          </div>

          <nav
            className={`${
              show ? "flex" : "hidden"
            } absolute inset-x-0 top-full max-h-[calc(100vh-5rem)] flex-col overflow-y-auto border-b border-brass/20 bg-ink/95 px-6 py-5 shadow-2xl backdrop-blur-2xl md:static md:flex md:max-h-none md:flex-row md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
              <li>
                <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/country"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <button
              onClick={handleButtonToggle}
              aria-label="Toggle menu"
              aria-expanded={show}
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-brass/30 bg-surface/60 text-2xl text-parchment transition-all duration-300 hover:border-brass hover:bg-surface hover:text-brass active:scale-95"
            >
              <GiHamburgerMenu className="transition-transform duration-300 group-hover:rotate-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
