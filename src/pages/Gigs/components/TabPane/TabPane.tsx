import React, { useState } from "react";
import { ITabPane } from "../../../../models/IGig";

const TabPane: React.FC<ITabPane> = ({ children, iSetTab }) => {
  const [openTab, setOpenTab] = useState<number>(1);
  const liActive = "border-b-2 border-primary";
  const tabActive = "font-extrabold";
  const tabInactive = "font-light";
  const badgeActive = "text-white bg-primary";
  const badgeInactive = "text-primary bg-primaryLight";
  const setTab = (tab: number) => {
    setOpenTab(tab);
    iSetTab(tab);
  };
  return (
    <div className="flex">
      <div className="w-full">
        <ul
          className="sm:flex mb-0 list-none flex-wrap pt-5 flex-row border-b border-faintedBlack"
          role="tablist"
        >
          <li
            className={
              "sm:mb-0 mb-2 mx-10 last:mr-0 flex-auto text-center transition duration-200 ease-in-out " +
              (openTab === 1 ? liActive : "")
            }
          >
            <div
              className={
                "text-sm px-5 py-3 rounded block leading-normal text-lightDark " +
                (openTab === 1 ? tabActive : tabInactive)
              }
              onClick={() => setTab(1)}
            >
              All gigs
              <span
                className={
                  "lg:ml-4 xs:ml-2 inline-flex items-center justify-center px-5 py-2 text-xs leading-none rounded-lg font-bold " +
                  (openTab === 1 ? badgeActive : badgeInactive)
                }
              >
                3404
              </span>
            </div>
          </li>
          <li
            className={
              "sm:mb-0 mb-2 mx-10 last:mr-0 flex-auto text-center transition duration-200 ease-in-out " +
              (openTab === 2 ? liActive : "")
            }
          >
            <div
              className={
                "text-sm px-5 py-3 rounded block leading-normal text-lightDark " +
                (openTab === 2 ? tabActive : tabInactive)
              }
              onClick={() => setTab(2)}
            >
              My gigs
              <span
                className={
                  "lg:ml-4 xs:ml-2 inline-flex items-center justify-center px-5 py-2 text-xs leading-none rounded-lg font-bold " +
                  (openTab === 2 ? badgeActive : badgeInactive)
                }
              >
                1200
              </span>
            </div>
          </li>
          <li
            className={
              "sm:mb-0 mb-2 mx-10 last:mr-0 flex-auto text-center transition duration-200 ease-in-out " +
              (openTab === 3 ? liActive : "")
            }
          >
            <div
              className={
                "text-sm px-5 py-3 rounded block leading-normal text-lightDark " +
                (openTab === 3 ? tabActive : tabInactive)
              }
              onClick={() => setTab(3)}
            >
              Rejected gigs
              <span
                className={
                  "lg:ml-4 xs:ml-2 inline-flex items-center justify-center px-5 py-2 text-xs leading-none rounded-lg font-bold " +
                  (openTab === 3 ? badgeActive : badgeInactive)
                }
              >
                100
              </span>
            </div>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 md:px-10 py-5">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPane;
