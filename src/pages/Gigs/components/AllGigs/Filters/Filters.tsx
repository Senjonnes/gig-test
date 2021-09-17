import React, { useEffect, useState } from "react";
import { AllGigsFilter } from "../../../../../models/IApp";
import "./Filters.css";
import { Select } from "antd";
const { Option } = Select;

const KEYWORDS: Array<string> = ["TM30", "TM31"];
const LOCATIONS: Array<string> = ["Lagos", "Abuja"];

const Filters: React.FC<AllGigsFilter> = ({ iHandleFilter }) => {
  const [filterFreelance, setFilterFreelance] = useState<boolean>(false);
  const [filterRemoteFriendly, setFilterRemoteFriendly] =
    useState<boolean>(false);
  const [filterDesign, setFilterDesign] = useState<boolean>(false);
  const [filterContract, setFilterContract] = useState<boolean>(false);
  const [filterKeywords, setFilterKeywords] = useState<boolean>(false);
  const [filterLocation, setFilterLocation] = useState<boolean>(false);
  const [filters, setFilters] = useState<string[]>([]);

  const handleChange = (value: any, count: number): void => {
    if (count === 5) {
      // const found = KEYWORDS.some(k => filters.includes(k))
      setFilterKeywords(true);
      setFilters((prev) => {
        if (!prev.includes(value)) {
          return [...prev, value];
        }
        return [...prev];
      });
    }

    if (count === 6) {
      // const found = KEYWORDS.some(k => filters.includes(k))
      setFilterLocation(true);
      setFilters((prev) => {
        if (!prev.includes(value)) {
          return [...prev, value];
        }
        return [...prev];
      });
    }
  };

  useEffect(() => {
    iHandleFilter(filters);
  });

  const handleFilter = (count: number): void => {
    if (count === 1) {
      if (!filterFreelance) {
        setFilterFreelance(true);
        setFilters((prev) => {
          return [...prev, "FREELANCE"];
        });
      } else {
        setFilterFreelance(false);
        setFilters(filters.filter((item) => item !== "FREELANCE"));
      }
    }

    if (count === 2) {
      if (!filterRemoteFriendly) {
        setFilterRemoteFriendly(true);
        setFilters((prev) => {
          return [...prev, "REMOTE_FRIENDLY"];
        });
        iHandleFilter(filters);
      } else {
        setFilterRemoteFriendly(false);
        setFilters(filters.filter((item) => item !== "REMOTE_FRIENDLY"));
      }
    }

    if (count === 3) {
      if (!filterDesign) {
        setFilterDesign(true);
        setFilters((prev) => {
          return [...prev, "DESIGN"];
        });
      } else {
        setFilterDesign(false);
        setFilters(filters.filter((item) => item !== "DESIGN"));
      }
    }

    if (count === 4) {
      if (!filterContract) {
        setFilterContract(true);
        setFilters((prev) => {
          return [...prev, "CONTRACT"];
        });
      } else {
        setFilterContract(false);
        setFilters(filters.filter((item) => item !== "CONTRACT"));
      }
    }
  };
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-6 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:p-0 px-10">
        <div
          onClick={() => handleFilter(1)}
          className={
            "flex justify-center text-sm rounded-xl p-2 bg-white " +
            (filterFreelance
              ? "border-2 border-primaryDeep text-primaryDeep font-bold"
              : "border border-gray-200 text-deadGray font-light")
          }
        >
          Freelance
        </div>
        <div
          className={
            "filters flex item-center justify-center text-sm font-light rounded-xl bg-white " +
            (filterKeywords
              ? "border-2 border-primaryDeep text-primaryDeep"
              : "border border-gray-200 text-deadGray")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={
              "my-auto ml-2 " + (filterKeywords ? "svg_a active" : "svg_a")
            }
          >
            <defs>
              <clipPath id="a">
                <path
                  className="a"
                  d="M19.709,9.308l-3-3.013a1,1,0,0,0-1.418,1.411L16.58,9H11V3.409l1.291,1.3A1,1,0,0,0,13.709,3.3l-2.987-3A.976.976,0,0,0,10.013,0a1,1,0,0,0-.706.292l-3.013,3A1,1,0,1,0,7.706,4.709L9,3.42V9H3.408l1.3-1.291A1,1,0,1,0,3.3,6.292L.3,9.279a1,1,0,0,0,0,1.414l3,3.013A1,1,0,0,0,4.709,12.3L3.42,11H9v5.592L7.709,15.3a1,1,0,0,0-1.418,1.411l2.987,3A1,1,0,0,0,9.985,20h0a1,1,0,0,0,.706-.291l3.013-3a1,1,0,1,0-1.412-1.417L11,16.58V11h5.592l-1.3,1.292a1,1,0,1,0,1.41,1.417l3-2.987a1,1,0,0,0,0-1.414"
                  transform="translate(2 2)"
                />
              </clipPath>
            </defs>
            <g className="b">
              <path
                className="a"
                d="M19.709,9.308l-3-3.013a1,1,0,0,0-1.418,1.411L16.58,9H11V3.409l1.291,1.3A1,1,0,0,0,13.709,3.3l-2.987-3A.976.976,0,0,0,10.013,0a1,1,0,0,0-.706.292l-3.013,3A1,1,0,1,0,7.706,4.709L9,3.42V9H3.408l1.3-1.291A1,1,0,1,0,3.3,6.292L.3,9.279a1,1,0,0,0,0,1.414l3,3.013A1,1,0,0,0,4.709,12.3L3.42,11H9v5.592L7.709,15.3a1,1,0,0,0-1.418,1.411l2.987,3A1,1,0,0,0,9.985,20h0a1,1,0,0,0,.706-.291l3.013-3a1,1,0,1,0-1.412-1.417L11,16.58V11h5.592l-1.3,1.292a1,1,0,1,0,1.41,1.417l3-2.987a1,1,0,0,0,0-1.414"
                transform="translate(2 2)"
              />
            </g>
          </svg>
          <Select
            style={{ width: 120 }}
            onChange={(value) => handleChange(value, 5)}
            placeholder="Keywords"
          >
            {KEYWORDS.map((k) => (
              <Option key={k} value={k}>
                {k}
              </Option>
            ))}
          </Select>
        </div>
        <div
          className={
            "filters flex item-center justify-center text-sm font-light rounded-xl bg-white " +
            (filterLocation
              ? "border-2 border-primaryDeep text-primaryDeep"
              : "border border-gray-200 text-deadGray")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={
              "my-auto ml-2 " + (filterLocation ? "svg_a active" : "svg_a")
            }
          >
            <defs>
              <clipPath id="a">
                <path
                  className="a"
                  d="M8,20a1,1,0,0,1-.651-.242C7.049,19.5,0,13.423,0,7.922a8,8,0,0,1,16,0c0,5.5-7.049,11.58-7.349,11.836A1,1,0,0,1,8,20ZM8,2A5.968,5.968,0,0,0,2,7.922c0,3.655,4.2,8.018,6,9.724,1.8-1.705,6-6.067,6-9.724A5.968,5.968,0,0,0,8,2Zm0,9a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,8,11ZM8,6A1.5,1.5,0,1,0,9.5,7.5,1.5,1.5,0,0,0,8,6Z"
                  transform="translate(4 2)"
                />
              </clipPath>
            </defs>
            <g className="b">
              <path
                className="a"
                d="M8,20a1,1,0,0,1-.651-.242C7.049,19.5,0,13.423,0,7.922a8,8,0,0,1,16,0c0,5.5-7.049,11.58-7.349,11.836A1,1,0,0,1,8,20ZM8,2A5.968,5.968,0,0,0,2,7.922c0,3.655,4.2,8.018,6,9.724,1.8-1.705,6-6.067,6-9.724A5.968,5.968,0,0,0,8,2Zm0,9a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,8,11ZM8,6A1.5,1.5,0,1,0,9.5,7.5,1.5,1.5,0,0,0,8,6Z"
                transform="translate(4 2)"
              />
            </g>
          </svg>
          <Select
            style={{ width: 120 }}
            onChange={(value) => handleChange(value, 6)}
            placeholder="Location"
          >
            {LOCATIONS.map((l) => (
              <Option key={l} value={l}>
                {l}
              </Option>
            ))}
          </Select>
        </div>
        <div
          onClick={() => handleFilter(2)}
          className={
            "flex space-x-2 items-center justify-center text-sm rounded-xl p-2 bg-white " +
            (filterRemoteFriendly
              ? "border-2 border-primaryDeep text-primaryDeep font-bold"
              : "border border-gray-200 text-deadGray font-light")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className={filterRemoteFriendly ? "svg_a active" : "svg_a"}
          >
            <defs>
              <clipPath id="a">
                <path
                  className="a"
                  d="M10.02,20H10A10,10,0,1,1,10,0h.028a10,10,0,0,1,0,20ZM7.08,11a11.023,11.023,0,0,0,2.931,6.608A11.436,11.436,0,0,0,12.962,11ZM2.069,11a8.052,8.052,0,0,0,5.338,6.561A12.815,12.815,0,0,1,5.061,11Zm12.906,0a13.213,13.213,0,0,1-2.358,6.552A8.049,8.049,0,0,0,17.93,11ZM12.65,2.461A12.99,12.99,0,0,1,14.978,9H17.93A8.053,8.053,0,0,0,12.65,2.461ZM10.026,2.4h0A11.432,11.432,0,0,0,7.079,9h5.88a11.148,11.148,0,0,0-2.933-6.6Zm-2.588.032A8.043,8.043,0,0,0,2.069,9h3A13.236,13.236,0,0,1,7.438,2.429Z"
                  transform="translate(2 2)"
                />
              </clipPath>
            </defs>
            <g className="b">
              <path
                className="a"
                d="M10.02,20H10A10,10,0,1,1,10,0h.028a10,10,0,0,1,0,20ZM7.08,11a11.023,11.023,0,0,0,2.931,6.608A11.436,11.436,0,0,0,12.962,11ZM2.069,11a8.052,8.052,0,0,0,5.338,6.561A12.815,12.815,0,0,1,5.061,11Zm12.906,0a13.213,13.213,0,0,1-2.358,6.552A8.049,8.049,0,0,0,17.93,11ZM12.65,2.461A12.99,12.99,0,0,1,14.978,9H17.93A8.053,8.053,0,0,0,12.65,2.461ZM10.026,2.4h0A11.432,11.432,0,0,0,7.079,9h5.88a11.148,11.148,0,0,0-2.933-6.6Zm-2.588.032A8.043,8.043,0,0,0,2.069,9h3A13.236,13.236,0,0,1,7.438,2.429Z"
                transform="translate(2 2)"
              />
            </g>
          </svg>
          <span>Remote friendly</span>
        </div>
        <div
          onClick={() => handleFilter(3)}
          className={
            "flex space-x-2 items-center justify-center text-sm rounded-xl p-2 bg-white " +
            (filterDesign
              ? "border-2 border-primaryDeep text-primaryDeep font-bold"
              : "border border-gray-200 text-deadGray font-light")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className={filterDesign ? "svg_a active" : "svg_a"}
          >
            <defs></defs>
            <g className="a">
              <path
                className="b"
                d="M17,18H3a3,3,0,0,1-3-3V7A3,3,0,0,1,3,4H6V2.5A2.5,2.5,0,0,1,8.5,0h3A2.5,2.5,0,0,1,14,2.5V4h3a3,3,0,0,1,3,3v8A3,3,0,0,1,17,18ZM15,6V16h2a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1ZM7,6V16h6V6ZM3,6A1,1,0,0,0,2,7v8a1,1,0,0,0,1,1H5V6ZM8.5,2a.5.5,0,0,0-.5.5V4h4V2.5a.5.5,0,0,0-.5-.5Z"
                transform="translate(2 3)"
              />
            </g>
          </svg>
          <span>Design</span>
        </div>
        <div
          onClick={() => handleFilter(4)}
          className={
            "flex space-x-2 items-center justify-center text-sm rounded-xl p-2 bg-white " +
            (filterContract
              ? "border-2 border-primaryDeep text-primaryDeep font-bold"
              : "border border-gray-200 text-deadGray font-light")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className={filterContract ? "svg_a active" : "svg_a"}
          >
            <defs></defs>
            <g className="a">
              <path
                className="b"
                d="M17,18H3a3,3,0,0,1-3-3V7A3,3,0,0,1,3,4H6V2.5A2.5,2.5,0,0,1,8.5,0h3A2.5,2.5,0,0,1,14,2.5V4h3a3,3,0,0,1,3,3v8A3,3,0,0,1,17,18ZM15,6V16h2a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1ZM7,6V16h6V6ZM3,6A1,1,0,0,0,2,7v8a1,1,0,0,0,1,1H5V6ZM8.5,2a.5.5,0,0,0-.5.5V4h4V2.5a.5.5,0,0,0-.5-.5Z"
                transform="translate(2 3)"
              />
            </g>
          </svg>
          <span>Contract</span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
