import React, { useState } from "react";
import "./AllGigs.css";
import AllGigsTable from "./AllGigsTable/AllGigsTable";
import Filters from "./Filters/Filters";

const AllGigs: React.FC = () => {
  const [filters, setFilters] = useState<string[]>([])
  const handleFilter = (filters_: string[]): void => {
    setFilters(filters_);
    console.log(filters_);
    console.log(filters);
  }
  return (
    <div>
      <Filters iHandleFilter={handleFilter} />

      <AllGigsTable />
    </div>
  );
};

export default AllGigs;
