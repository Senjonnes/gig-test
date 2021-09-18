import * as React from "react";
import { Table } from "antd";
import "./AllGigsTable.css";
import Checkbox from "antd/lib/checkbox/Checkbox";

const columns: Array<any> = [
  {
    title: "",
    key: "check",
    render: () => (
      <>
        <Checkbox></Checkbox>
      </>
    ),
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    defaultSortOrder: "descend",
    sorter: (a: any, b: any) => a - b,
  },
  {
    title: "Salary",
    dataIndex: "salary",
    key: "salary",
    defaultSortOrder: "descend",
    sorter: (a: any, b: any) => a - b,
  },
  {
    title: "",
    key: "action",
    dataIndex: "action",
    render: (action: string) => (
      <>
        <button className="bg-primaryLight hover:bg-primary hover:text-white text-primary group flex items-center rounded-lg text-sm font-medium px-8 py-2">
          {action}
        </button>
      </>
    ),
  },
];

const data: Array<any> = [
  {
    key: "1",
    role: "Product Designer",
    company: "TM30",
    date: "20th, June 2020",
    salary: "20,000 - 30,000",
    action: "Delete",
  },
  {
    key: "2",
    role: "Product Designer",
    company: "TM30",
    date: "20th, June 2020",
    salary: "20,000 - 30,000",
    action: "Delete",
  },
  {
    key: "3",
    role: "Product Designer",
    company: "TM30",
    date: "20th, June 2020",
    salary: "20,000 - 30,000",
    action: "Delete",
  },
  {
    key: "4",
    role: "Product Designer",
    company: "TM30",
    date: "20th, June 2020",
    salary: "20,000 - 30,000",
    action: "Delete",
  },
  {
    key: "5",
    role: "Product Designer",
    company: "TM30",
    date: "20th, June 2020",
    salary: "20,000 - 30,000",
    action: "Delete",
  },
  {
    key: "6",
    role: "Product Designer",
    company: "TM30",
    date: "20th, June 2020",
    salary: "20,000 - 30,000",
    action: "Delete",
  },
];

const AllGigsTable: React.FC = () => {
  return (
    <div className="mt-10 all_gigs_table">
      <Table scroll={{ x: 400 }} columns={columns} dataSource={data} />;
    </div>
  );
};

export default AllGigsTable;
