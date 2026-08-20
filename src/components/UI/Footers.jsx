import footerContact from "../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

import { NavLink } from "react-router-dom";

const Footers = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="mt-24 border-t border-line bg-surface/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-3 sm:px-6 lg:px-8">
        {footerContact.map((curData) => {
          const { icon, title, details, id } = curData;
          return (
            <div
              className="flex items-center gap-4 rounded-xl border border-line/60 bg-surface-2/30 p-4 transition-colors duration-200 hover:border-line"
              key={id}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brass/10 text-2xl text-brass">
                {footerIcon[icon]}
              </div>
              <div className="flex flex-col gap-0.5 overflow-hidden">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  {title}
                </p>
                <p className="truncate font-sans text-sm font-medium text-parchment">
                  {details}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-line bg-ink">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-mono text-xs text-muted">
                Copyright &copy; 2026, All Rights Reserved{" "}
                <span className="font-semibold text-brass">Yasir Rajput</span>
              </p>
            </div>

            <div className="footer-menu">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <li>
                  <NavLink
                    to="/"
                    className="font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-200 hover:text-brass-light"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-200 hover:text-brass-light"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/country"
                    className="font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-200 hover:text-brass-light"
                  >
                    Country
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-200 hover:text-brass-light"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
