import React from "react";
import SideNavBar from "../../components/SideNavBar/SideNavBar";
import { Props } from "../../models/Props";

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <SideNavBar />
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
