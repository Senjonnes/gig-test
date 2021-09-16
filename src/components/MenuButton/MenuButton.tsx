import React from "react";
import { Menu } from "../../models/Menu";

const MenuButton: React.FC<Menu> = (menu) => {
  return (
    <>
        <a
          href="#/"
          className="text-sm flex items-center text-gray-400 block py-5 pl-8 pr-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          <img className="h-5 pr-3" src={menu.logo} alt="" />
          {menu.name}
        </a>
    </>
  );
};

export default MenuButton;
