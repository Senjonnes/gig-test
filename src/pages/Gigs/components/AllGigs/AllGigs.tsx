import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../../../models/IUsersState";
import { fecthUsers } from "../../../../redux/actions/users.action";
import { RootState } from "../../../../redux/reducers";
import AllGigsTable from "./AllGigsTable/AllGigsTable";
import Filters from "./Filters/Filters";

const AllGigs: React.FC = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const dispatch = useDispatch();
  const users: IUser[] = useSelector((state: RootState | any) => state?.users?.users?.users?.data);

  useEffect(() => {
    dispatch(fecthUsers());
  }, [dispatch]);

  const handleFilter = (filters_: string[]): void => {
    setFilters(filters_);
    console.log(filters);
  };

  return (
    <div>
      <Filters iHandleFilter={handleFilter} />
      <AllGigsTable users={users} />
    </div>
  );
};

export default AllGigs;
