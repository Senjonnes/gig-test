import React, { useRef, useState } from "react";
import giglogo from "../../assets/icon/giglogo.svg";
import home from "../../assets/icon/home.svg";
import briefcase from "../../assets/icon/briefcase.svg";
import company from "../../assets/icon/company.svg";
import user from "../../assets/icon/user.svg";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import MenuButton from "../../components/MenuButton/MenuButton";
import { IJSX } from "../../models/IJSX";
import { IMenu } from "../../models/IComponent";
import "./AppLayout.css";

const AppLayout: React.FC<IJSX> = ({ children }) => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const sideBar = useRef<HTMLDivElement | null>(null);
  const handleClick = (): void => {
    if(!showBackdrop) {
      document.body.style.overflow = 'hidden';
      setShowBackdrop(true);
    }
    sideBar.current?.classList.toggle("-translate-x-full");
  };

  const handleBackdropClick = (): void => {
    document.body.style.overflow = 'auto';
    setShowBackdrop(false);
    sideBar.current?.classList.toggle("-translate-x-full");
  } 
  const menu: IMenu[] = [
    {
      name: "Dashboard",
      logo: home,
      link: "/",
    },
    {
      name: "Gigs",
      logo: briefcase,
      link: "/gigs",
    },
    {
      name: "Company",
      logo: company,
      link: "/company",
    },
    {
      name: "Account",
      logo: user,
      link: "/account",
    },
  ];

  return (
    <>
    {showBackdrop && <div onClick={handleBackdropClick} className="backdrop z-20"></div>}
    <div className="relative min-h-screen md:flex">
      <div
        ref={sideBar}
        className="fixed z-20 border text-blue-100 w-64 space-y-10 py-10 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:fixed md:translate-x-0 transition duration-200 ease-in-out bg-appBgColor"
      >
        <a
          href="https://facebook.com"
          className="text-center w-full justify-center flex items-center space-x-2 px-4"
        >
          <img src={giglogo} alt="" />
        </a>
        <nav>
          {menu.map((m: IMenu) => (
            <MenuButton
              key={m.logo}
              name={m.name}
              logo={m.logo}
              link={m.link}
            />
          ))}
        </nav>
      </div>
      <div className="flex-1 md:ml-64">
        <TopNavBar handleClick={handleClick} />

        <div className="pt-48 pb-10">{children}</div>
      </div>
    </div>
    </>
  );
};

export default AppLayout;
