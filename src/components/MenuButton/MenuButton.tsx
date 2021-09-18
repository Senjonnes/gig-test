import React from "react";
import { NavLink } from "react-router-dom";
import { IMenu } from "../../models/IComponent";
import "./MenuButton.css";

const MenuButton: React.FC<IMenu> = (menu) => {
  const handleStyle = (): void => {
    document.body.style.overflow = "auto";
  };
  return menu.link !== "/gigs" ? (
    <NavLink activeClassName="selected" exact to={menu.link}>
      <div
        onClick={handleStyle}
        className="text-sm flex items-center text-gray-400 block py-5 pl-8 pr-4 rounded transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="svg"
        >
          {menu.link === "/" ? (
            <>
              <defs>
                <clipPath id="a">
                  <path
                    className="a"
                    d="M13,19.988v-9a1,1,0,0,0-1-1H6a1,1,0,0,0-1,1v9H1.889a1.95,1.95,0,0,1-1.889-2V9.612A2.074,2.074,0,0,1,.575,8.174L8.285.289a1.028,1.028,0,0,1,1.429,0l7.709,7.884A2.074,2.074,0,0,1,18,9.612v8.375a1.949,1.949,0,0,1-1.888,2Zm-6-1v-7h4v7Z"
                    transform="translate(3 2.012)"
                  />
                </clipPath>
              </defs>
              <path
                className="a"
                d="M13,19.988v-9a1,1,0,0,0-1-1H6a1,1,0,0,0-1,1v9H1.889a1.95,1.95,0,0,1-1.889-2V9.612A2.074,2.074,0,0,1,.575,8.174L8.285.289a1.028,1.028,0,0,1,1.429,0l7.709,7.884A2.074,2.074,0,0,1,18,9.612v8.375a1.949,1.949,0,0,1-1.888,2Zm-6-1v-7h4v7Z"
                transform="translate(3 2.012)"
              />
            </>
          ) : menu.link === "/company" ? (
            <>
              <defs>
                <clipPath id="a">
                  <path
                    className="a"
                    d="M15,0H3A3,3,0,0,0,0,3V15a3,3,0,0,0,3,3h7V8h4V18h1a3,3,0,0,0,3-3V3a3,3,0,0,0-3-3"
                    transform="translate(3 3)"
                  />
                </clipPath>
              </defs>
              <path
                className="a"
                d="M15,0H3A3,3,0,0,0,0,3V15a3,3,0,0,0,3,3h7V8h4V18h1a3,3,0,0,0,3-3V3a3,3,0,0,0-3-3"
                transform="translate(3 3)"
              />
            </>
          ) : (
            <>
              <defs>
                <clipPath id="a">
                  <path
                    className="a"
                    d="M1,18a1,1,0,0,1-1-1,7,7,0,1,1,14,0,1,1,0,0,1-1,1ZM3,4A4,4,0,1,1,7,8,4,4,0,0,1,3,4Z"
                    transform="translate(5 3)"
                  />
                </clipPath>
              </defs>
              <path
                className="a"
                d="M1,18a1,1,0,0,1-1-1,7,7,0,1,1,14,0,1,1,0,0,1-1,1ZM3,4A4,4,0,1,1,7,8,4,4,0,0,1,3,4Z"
                transform="translate(5 3)"
              />
            </>
          )}
        </svg>
        <span className="pt-1 pl-3">{menu.name}</span>
      </div>
    </NavLink>
  ) : (
    <NavLink activeClassName="selected" to={menu.link}>
      <div
        onClick={handleStyle}
        className="text-sm flex items-center text-gray-400 block py-5 pl-8 pr-4 rounded transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="svg"
        >
          <defs></defs>
          <g className="a">
            <path
              className="b"
              d="M17,18H3a3,3,0,0,1-3-3V7A3,3,0,0,1,3,4H6V2.5A2.5,2.5,0,0,1,8.5,0h3A2.5,2.5,0,0,1,14,2.5V4h3a3,3,0,0,1,3,3v8A3,3,0,0,1,17,18ZM15,6V16h2a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1ZM7,6V16h6V6ZM3,6A1,1,0,0,0,2,7v8a1,1,0,0,0,1,1H5V6ZM8.5,2a.5.5,0,0,0-.5.5V4h4V2.5a.5.5,0,0,0-.5-.5Z"
              transform="translate(2 3)"
            />
          </g>
        </svg>
        <span className="pt-1 pl-3">{menu.name}</span>
      </div>
    </NavLink>
  );
};

export default MenuButton;
