import { useState } from "react";
import { navLinks } from "../../constants";

import { close, icon, menu, down, up } from "../../assets";

function Navbar() {
  const [active, setActive] = useState(window.location.pathname);
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [activeSub, setActiveSub] = useState(window.location.pathname);

  const handleToggleSub = (navRef) => {
    setActiveSub(activeSub === navRef ? null : navRef);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <a href="/">
        <img src={icon} alt="hoobank" className="w-[50px] h-[50px]" />
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins relative font-normal cursor-pointer text-[16px] ${
              active === nav.ref ? "text-[#666666]" : "text-[#666666]"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            {nav.subLinks ? (
              <a
                href="#"
                className="flex flex-row "
                onClick={(e) => {
                  e.preventDefault(); // Evitar redirección al hacer clic
                  handleToggleSub(nav.ref);
                  setToggle2(!toggle2);
                }}
              >
                {nav.title}
                <img
                  src={toggle2 ? down : up}
                  alt="subLinksMenu"
                  className="ml-2 w-[20px] h-[20px] object-contain"
                />
              </a>
            ) : (
              <a href={`${nav.ref}`}>{nav.title}</a>
            )}
            {nav.subLinks && activeSub === nav.ref && (
              <ul className="sub-links absolute top-full z-50 mt-2 py-2 px-4 bg-white border border-gray-300 shadow-md rounded-lg">
                {nav.subLinks.map((subLink, subIndex) => (
                  <li
                    key={subIndex}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${
                      activeSub === subLink.ref
                        ? "text-[#666666]"
                        : "text-[#666666]"
                    }`}
                  >
                    <a href={`${subLink.ref}`}>{subLink.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px]  z-10 rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.ref ? "text-[#666666]" : "text-[#666666]"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                {nav.subLinks ? (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Evitar redirección al hacer clic
                      handleToggleSub(nav.ref);
                    }}
                  >
                    {nav.title}
                  </a>
                ) : (
                  <a href={`${nav.ref}`}>{nav.title}</a>
                )}
                {nav.subLinks && activeSub === nav.ref && (
                  <ul className="sub-links">
                    {nav.subLinks.map((subLink, subIndex) => (
                      <li
                        key={subIndex}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${
                          activeSub === subLink.ref
                            ? "text-[#666666]"
                            : "text-[#666666]"
                        }`}
                      >
                        <a href={`${subLink.ref}`}>{subLink.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
