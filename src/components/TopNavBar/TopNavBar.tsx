import React, { useRef } from "react";
import notification from "../../assets/icon/notification.svg";
import email from "../../assets/icon/email.svg";
import settings from "../../assets/icon/settings.svg";
import person from "../../assets/img/person.png";
import "./TopNavBar.css";
import { ITopNav } from "../../models/IComponent";

const TopNavBar: React.FC<ITopNav> = ({ handleClick }) => {
  const mobileMenuBtn = useRef<HTMLButtonElement | null>(null);
  const handleToggle = (): void => {
    handleClick();
  };
  return (
    <nav className="z-10 border fixed top-nav-bar left-64 right-0 bg-appBgColor">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between">
          <div className="flex space-x-4 w-1/2 py-5 px-2 hidden md:flex ">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute rounded-lg text-base items-center justify-center w-8 pl-3 py-3">
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
                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative rounded-lg text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pl-12"
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
              onClick={handleToggle}
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
  );
};

export default TopNavBar;
