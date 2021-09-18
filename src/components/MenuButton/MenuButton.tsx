import React from "react";
import { NavLink } from "react-router-dom";
import { IMenu } from "../../models/IComponent";
import "./MenuButton.css";

const MenuButton: React.FC<IMenu> = (menu) => {
  return menu.link !== "/gigs" ? (
    <NavLink activeClassName="selected" exact to={menu.link}>
      <div className="text-sm flex items-center text-gray-400 block py-5 pl-8 pr-4 rounded transition duration-200">
        <img className="h-5 pr-3" src={menu.logo} alt="" />
        {menu.name}
      </div>
    </NavLink>
  ) : (
    <NavLink activeClassName="selected" to={menu.link}>
      <div className="text-sm flex items-center text-gray-400 block py-5 pl-8 pr-4 rounded transition duration-200">
        <img className="h-5 pr-3" src={menu.logo} alt="" />
        {menu.name}
      </div>
    </NavLink>
  );
};

export default MenuButton;
