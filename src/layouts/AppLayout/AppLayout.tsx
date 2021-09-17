import React, { useRef } from "react";
import giglogo from "../../assets/icon/giglogo.svg";
import home from "../../assets/icon/home.svg";
import briefcase from "../../assets/icon/briefcase.svg";
import company from "../../assets/icon/company.svg";
import user from "../../assets/icon/user.svg";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import { Props } from "../../models/Props";
import MenuButton from "../../components/MenuButton/MenuButton";
import { Menu } from "../../models/Menu";

const AppLayout: React.FC<Props> = ({ children }) => {
  const sideBar = useRef<HTMLDivElement | null>(null);
  const handleClick = (): void => {
    sideBar.current?.classList.toggle("-translate-x-full");
  };
  const menu: Menu[] = [
    {
      name: "Dashboard",
      logo: home,
      link: '/'
    },
    {
      name: "Gigs",
      logo: briefcase,
      link: '/gigs'
    },
    {
      name: "Company",
      logo: company,
      link: '/company'
    },
    {
      name: "Account",
      logo: user,
      link: '/account'
    },
  ];

  return (
    <div className="relative min-h-screen md:flex">
      <div
        ref={sideBar}
        className="fixed z-20 bg-fadedWhite border text-blue-100 w-64 space-y-10 py-10 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
      >
        <a
          href="https://facebook.com"
          className="text-center w-full justify-center flex items-center space-x-2 px-4"
        >
          <img src={giglogo} alt="" />
        </a>
        <nav>
          {menu.map((m: Menu) => (
            <MenuButton key={m.logo} name={m.name} logo={m.logo} link={m.link} />
          ))}
        </nav>
      </div>
      <div className="flex-1">
        <TopNavBar handleClick={handleClick} />

        <div className="pt-48 pb-10">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
