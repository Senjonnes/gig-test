import React, { useState } from "react";
import TabPane from "./components/TabPane/TabPane";
import AppLayout from "../../layouts/AppLayout/AppLayout";
import AllGigs from "./components/AllGigs/AllGigs";
import MyGigs from "./components/MyGigs/MyGigs";
import RejectedGigs from "./components/RejectedGigs/RejectedGigs";
import { useHistory } from "react-router-dom";

const Gigs: React.FC = () => {
  const [openTab, setOpenTab] = useState(1);
  const history = useHistory();
  const setTab = (tab: number) => {
    setOpenTab(tab);
  };
  const goToNewGig = (): void => {
    history.push('/gigs/new-gig')
  }
  return (
    <AppLayout>
      <>
        <header className="flex items-center justify-between px-5 sm:px-10">
          <h2 className="text-3xl font-extrabold leading-6 font-medium text-lightDark">
            Gigs
          </h2>
          <button onClick={goToNewGig} className="space-x-8 bg-deepBlue hover:bg-primary text-white group flex items-center rounded-lg text-sm font-medium px-4 py-4">
            <span>New gig</span>
            <svg
              className="group-hover:text-light-blue-600 text-light-blue-500 mr-2"
              width="12"
              height="20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
              />
            </svg>
          </button>
        </header>

        <TabPane iSetTab={setTab}>
          <>
            {openTab === 1 && <AllGigs />}
            {openTab === 2 && <MyGigs />}
            {openTab === 3 && <RejectedGigs />}
          </>
        </TabPane>
      </>
    </AppLayout>
  );
};

export default Gigs;
