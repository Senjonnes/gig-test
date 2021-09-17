import React, { useState } from "react";
import { ITabPane } from "../../../../models/ITabPane";

const TabPane: React.FC<ITabPane> = ({children, iSetTab}) => {
    const [openTab, setOpenTab] = useState<number>(1);
  const setTab = (tab: number) => {
    setOpenTab(tab);
    iSetTab(tab);
  };
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="sm:flex mb-0 list-none flex-wrap pt-3 flex-row border-b-2 border-faintedBlack"
          role="tablist"
        >
          <li
            className={
              "sm:mb-0 mb-2 mx-10 last:mr-0 flex-auto text-center transition duration-200 ease-in-out " +
              (openTab === 1 ? "border-b-2 border-primary" : "")
            }
          >
            <div
              className={
                "text-sm px-5 py-3 rounded block leading-normal bg-white text-lightDark " +
                (openTab === 1 ? "font-extrabold" : "font-light")
              }
              onClick={() => setTab(1)}
            >
              All gigs
            </div>
          </li>
          <li
            className={
              "sm:mb-0 mb-2 mx-10 last:mr-0 flex-auto text-center transition duration-200 ease-in-out " +
              (openTab === 2 ? "border-b-2 border-primary" : "")
            }
          >
            <div
              className={
                "text-sm px-5 py-3 rounded block leading-normal bg-white text-lightDark " +
                (openTab === 2 ? "font-extrabold" : "font-light")
              }
              onClick={() => setTab(2)}
            >
              My gigs
            </div>
          </li>
          <li
            className={
              "sm:mb-0 mb-2 mx-10 last:mr-0 flex-auto text-center transition duration-200 ease-in-out " +
              (openTab === 3 ? "border-b-2 border-primary" : "")
            }
          >
            <div
              className={
                "text-sm px-5 py-3 rounded block leading-normal bg-white text-lightDark " +
                (openTab === 3 ? "font-extrabold" : "font-light")
              }
              onClick={() => setTab(3)}
            >
              Rejected gigs
            </div>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 md:px-10 py-5">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
                {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPane;
