import { useState, useEffect } from "react";
import { navLinks } from "../../constants";
import Logout from "../imports/Logout";
import { close, icon, menu, down, up } from "../../assets";
import { useNavigate } from "react-router-dom";

function Navbar({ isAuth }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(window.location.pathname);
  const [toggle, setToggle] = useState(false);
  const [activeSub, setActiveSub] = useState(null);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const userRole = localStorage.getItem("rol");
  useEffect(() => {
    const handleLocationChange = () => {
      setActive(window.location.pathname);
      setToggle(false);
    };
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);
  const handleToggleSub2 = (navRef) => {
    setActiveSub(activeSub === navRef ? null : navRef);
  };

  const filteredLinks = navLinks.filter((nav) => {
    if (isAuth) {
      // Si el usuario está logeado y es un administrador, mostrar la opción si isAuth es true o si isAdmin es true
      return nav.isAuth !== false && (!nav.isAdmin || userRole == "admin");
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

    // Actualiza el estado del submenú
    if (subMenuStates.hasOwnProperty(navRef)) {
      subMenuStates[navRef] = !subMenuStates[navRef];
      setToggle(!toggle); // Cambia el estado de toggle para forzar una actualización de la vista
    }
  };

  return location.pathname !== "/login" ? (
    <nav className="w-full flex py-6 justify-between items-center navbar select-none">
      <a href="/">
        <img src={icon} alt="hoobank" className="w-[50px] h-[50px]" />
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {filteredLinks.map((nav, index) => (
          <li
            key={nav.ref || index}
            className={`font-custom_Syne relative font-bold cursor-pointer text-[16px] ${
              active === nav.ref ? "text-[#666666]" : "text-[#666666]"
            } ${index === filteredLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            {nav.subLinks ? (
              <a
                className={`flex flex-row items-center font-[10px] p-4 space-x-3 rounded-md hover:bg-[#F5F4FB] hover:ease-in-out`}
                onClick={(e) => {
                  e.preventDefault();
                  handleToggleSub(nav.ref);
                }}
              >
                <span className="mr-auto">{nav.title}</span>
                <span
                  className={`ml-auto float-right transform ${
                    activeSub === nav.ref ? "scale-y-[-1]" : "scale-y-[1]"
                  } transition-transform duration-300`}
                >
                  <img
                    src={down}
                    alt="subLinksMenu"
                    className="w-4 h-4 object-contain"
                  />
                </span>
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
              <ul className="sub-links absolute top-full w-full z-50 mt-2 py-2 px-4 space-y-2 bg-white border border-gray-300 shadow-md rounded-lg">
                {nav.subLinks.map((subLink, subIndex) => (
                  <li
                    key={subIndex}
                    className={`font-custom_Syne font-normal cursor-pointer text-[16px] hover:font-bold ${
                      activeSub === subLink.ref
                        ? "text-[#666666]"
                        : "text-[#666666]"
                    }`}
                  >
                    {subLink.title === "Salir" ? (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleToggleSub(nav.ref);
                          setLogoutModalOpen(true);
                        }}
                      >
                        {subLink.title}
                      </a>
                    ) : (
                      <a href={`${subLink.ref}`}>{subLink.title}</a>
                    )}
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
                key={nav.ref || index}
                className={`font-custom_Syne font-medium cursor-pointer text-[16px] ${
                  active === nav.ref ? "text-[#666666]" : "text-[#666666]"
                } ${index === filteredLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                {nav.subLinks ? (
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleToggleSub2(nav.ref);
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
                        {subLink.title === "Salir" ? ( // Comprueba si el subLink es "Salir"
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                              handleToggleSub2(nav.ref);
                              setLogoutModalOpen(true); // Abre el modal de salida
                            }}
                          >
                            {subLink.title}
                          </a>
                        ) : (
                          <a href={`${subLink.ref}`}>{subLink.title}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {
        <Logout
          isOpen={isLogoutModalOpen}
          onClose={() => setLogoutModalOpen(false)}
        />
      }
    </nav>
  ) : null;
}

export default Navbar;
