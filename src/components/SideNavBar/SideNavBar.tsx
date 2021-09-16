import React, { useRef } from "react";
import giglogo from "../../assets/icon/giglogo.svg";
import home from "../../assets/icon/home.svg";
import briefcase from "../../assets/icon/briefcase.svg";
import company from "../../assets/icon/company.svg";
import user from "../../assets/icon/user.svg";
import notification from "../../assets/icon/notification.svg";
import email from "../../assets/icon/email.svg";
import settings from "../../assets/icon/settings.svg";
import person from "../../assets/img/person.png";

const SideNavBar: React.FC = () => {
  const mobileMenuBtn = useRef<HTMLButtonElement | null>(null);
  const sideBar = useRef<HTMLDivElement | null>(null);
  const handleClick = (): void => {
    sideBar.current?.classList.toggle("-translate-x-full");
  };
  return (
    <div className="relative min-h-screen md:flex">
      <div
        ref={sideBar}
        className="z-20 bg-fadedWhite border text-blue-100 w-64 space-y-10 py-10 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
      >
        <a
          href="https://facebook.com"
          className="text-center w-full justify-center flex items-center space-x-2 px-4"
        >
          <img src={giglogo} alt="" />
        </a>
        <nav>
          <a
            href="#/"
            className="text-sm flex items-center text-gray-400 block py-5 pl-8 pr-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            <img className="h-5 pr-3" src={home} alt="" />
            Home
          </a>
          <a
            href="#/"
            className="text-sm flex items-center text-gray-400 block py-5 pl-8 pr-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            <img className="h-5 pr-3" src={briefcase} alt="" />
            About
          </a>
          <a
            href="#/"
            className="text-sm flex items-center text-gray-400 block py-5 pl-8 pr-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            <img className="h-5 pr-3" src={company} alt="" />
            Features
          </a>
          <a
            href="#/"
            className="text-sm flex items-center text-gray-400 block py-5 pl-8 pr-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            <img className="h-5 pr-3" src={user} alt="" />
            Pricing
          </a>
        </nav>
      </div>
      <div className="flex-1 text-2xl font-bold">
        <nav className="bg-fadedWhite border">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex justify-between">
              <div className="flex space-x-4 w-1/2 py-5 px-2 hidden md:flex ">
                <div className="relative flex w-full flex-wrap items-stretch">
                  <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded-lg text-base items-center justify-center w-8 pl-3 py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded-lg text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pl-12"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <a href="#/" className="py-5 px-3">
                <img className="h-5" src={notification} alt="" />
                </a>
                <a href="#/" className="py-5 px-3">
                  <img className="h-5" src={email} alt="" />
                </a>
                <a href="#/" className="py-5 px-3">
                  <img className="h-5" src={settings} alt="" />
                </a>
                <a href="#/" className="py-5 px-3">
                  <img className="h-8" src={person} alt="" />
                </a>
              </div>

              <div className="md:hidden flex items-center">
                <button
                  ref={mobileMenuBtn}
                  onClick={handleClick}
                  className="mobile-menu-button"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="p-4">Content here</div>
      </div>
    </div>
  );
};

export default SideNavBar;
