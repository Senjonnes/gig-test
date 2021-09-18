import * as React from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";
import "./AllGigsTable.css";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { IUser } from "../../../../../models/IUsersState";
import { LoadingOutlined } from "@ant-design/icons";
import { RootState } from "../../../../../redux/reducers";

type Props = {
  [key: string]: IUser[];
};

const AllGigsTable: React.FC<Props> = ({ users }) => {
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
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a: any, b: any) => a.length - b.length,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
      sorter: (a: any, b: any) => a.name.length - b.name.length,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "",
      key: "action",
      dataIndex: "action",
      render: (action: string) => (
        <>
          <button className="bg-primaryLight hover:bg-primary hover:text-white text-primary group flex items-center rounded-lg text-sm font-medium px-8 py-2">
            Delete
          </button>
        </>
      ),
    },
  ];

  const data: Array<any> =
    users && users.length
      ? users.map((row, index) => {
          return {
            key: row.id,
            name: row.name,
            username: row.username,
            email: row.email,
            website: row.website,
            company: row.company.name,
            address: `${row.address.suite}, ${row.address.street}, ${row.address.city}`,
          };
        })
      : [];

  const loading: boolean = useSelector(
    (state: RootState | any) => state?.users?.loading
  );

  const tableLoading = {
    spinning: loading,
    indicator: <LoadingOutlined twoToneColor="#E18700" />,
  };

  return (
    <div className="mt-10 all_gigs_table">
      <Table
        loading={tableLoading}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 400 }}
        columns={columns}
        dataSource={data}
      />
      ;
    </div>
  );
};

export default AllGigsTable;
