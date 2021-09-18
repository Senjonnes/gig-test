import React from "react";
import AppLayout from "../../../layouts/AppLayout/AppLayout";
import NewGigFrame from "./components/NewGigFrame/NewGigFrame";

const NewGig: React.FC = () => {
  return (
    <AppLayout>
      <>
        <div className="pt-5 border-b border-faintedBlack pb-8">
          <header className="flex items-center justify-between px-5 sm:px-10">
            <h2 className="text-3xl font-extrabold leading-6 font-medium text-lightDark">
              Gigs
            </h2>
          </header>
        </div>
        <div className="w-full">
          <NewGigFrame />
        </div>
      </>
    </AppLayout>
  );
};

export default NewGig;
