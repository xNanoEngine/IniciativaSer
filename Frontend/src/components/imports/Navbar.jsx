import { useState } from "react";
import { navLinks } from "../../constants";

import { close, icon, menu, down, up } from "../../assets";

function Navbar({ isAuth }) {
  const [active, setActive] = useState(window.location.pathname);
  const [toggle, setToggle] = useState(false);
  const [activeSub, setActiveSub] = useState(null);

  const filteredLinks = navLinks.filter((nav) => {
    if (isAuth) {
      // Si el usuario está logeado, mostrar la opción si isAuth es true
      return nav.isAuth !== false;
    } else {
      // Si el usuario no está logeado, mostrar la opción si isAuth es false o no está definida
      return nav.isAuth !== true;
    }
  });

  // Create a state for each submenu
  const subMenuStates = {};
  filteredLinks.forEach((nav) => {
    if (nav.subLinks) {
      subMenuStates[nav.ref] = false;
    }
  });

  // Function to toggle a submenu
  const handleToggleSub = (navRef) => {
    setActiveSub(activeSub === navRef ? null : navRef);

    // Toggle the submenu state
    if (subMenuStates.hasOwnProperty(navRef)) {
      subMenuStates[navRef] = !subMenuStates[navRef];
    }
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="/">
        <img src={icon} alt="hoobank" className="w-[50px] h-[50px]" />
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {filteredLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-custom_Syne relative font-bold cursor-pointer text-[16px] ${
              active === nav.ref ? "text-[#666666]" : "text-[#666666]"
            } ${index === filteredLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            {nav.subLinks ? (
              <a
                className="flex flex-row font-[10px] p-4 rounded-md hover:bg-[#F5F4FB] hover:ease-in-out"
                onClick={(e) => {
                  e.preventDefault();
                  handleToggleSub(nav.ref);
                }}
              >
                {nav.title}
                <img
                  src={subMenuStates[nav.ref] ? up : down}
                  alt="subLinksMenu"
                  className="ml-2 w-[18px] h-[18px] object-contain"
                />
              </a>
            ) : (
              <div className="cursor-default">
                <a
                  href={`${nav.ref}`}
                  className=" hover:text-black hover:underline hover:underline-offset-[24px] hover:decoration-2"
                >
                  {nav.title}
                </a>
              </div>
            )}
            {nav.subLinks && activeSub === nav.ref && (
              <ul className="sub-links absolute top-full w-full z-50 mt-2 py-2 px-4 bg-white border border-gray-300 shadow-md rounded-lg">
                {nav.subLinks.map((subLink, subIndex) => (
                  <li
                    key={subIndex}
                    className={`font-custom_Syne font-normal cursor-pointer text-[16px] ${
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
            {filteredLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-custom_Syne font-medium cursor-pointer text-[16px] ${
                  active === nav.ref ? "text-[#666666]" : "text-[#666666]"
                } ${index === filteredLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                {nav.subLinks ? (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
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
                        className={`font-custom_Syne font-normal cursor-pointer text-[16px] ${
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
