import { Input, Select } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { WithContext as ReactTags } from "react-tag-input";
import Button from "../../../../../components/Button/Button";
import { INewGigBasicDataForm, ITag } from "../../../../../models/IGig";
import "./NewGigBasicDataForm.css";

const { Option } = Select;
const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];

const STATES: Array<string> = ["Lagos", "Abuja"];
const COUNTRIES: Array<string> = ["Nigeria", "United State"];

const NewGigBasicDataForm: React.FC<INewGigBasicDataForm> = ({ onClick }) => {
  const history = useHistory();
  const [tags, setTags] = useState<Array<ITag>>([
    { id: "Remote", text: "Remote" },
  ]);
  const suggestions: Array<ITag> = [
    { id: "Remote", text: "Remote" },
    { id: "Onsite", text: "Onsite" },
    { id: "Hybrid", text: "Hybrid" },
  ];

  const handleDelete = (i: any): void => {
    setTags(tags.filter((tag: ITag, index: any) => index !== i));
  };

  const handleAddition = (tag: ITag): void => {
    setTags((prev) => [...prev, tag]);
  };

  const handleDrag = (tag: ITag, currPos: any, newPos: any): void => {
    const newTags = tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  const handleClick = (): void => {
    onClick();
  };

  const handleChange = (value: any): void => {};

  const goBack = (): void => {
    history.goBack();
  };
  return (
    <div className="sm:w-1/2 md:w-3/5 py-5 px-10 border border-faintedBlack bg-white rounded-2xl text-lightDarkF">
      <div className="flex mt-5 mb-8 space-x-4">
        <div className="w-1/2">
          <p className="mb-2">Role</p>
          <Input placeholder="Role" />
        </div>
        <div className="w-1/2">
          <p className="mb-2">Company</p>

          <Input placeholder="Company" />
        </div>
      </div>
      <div>
        <p className="mb-2">Location</p>

        <div className="flex mb-5 space-x-4">
          <div className="w-1/2">
            <Select
              style={{ width: 120 }}
              onChange={(value) => handleChange(value)}
              placeholder="Country"
            >
              {COUNTRIES.map((c) => (
                <Option key={c} value={c}>
                  {c}
                </Option>
              ))}
            </Select>
          </div>
          <div className="w-1/2">
            <Select
              style={{ width: 120 }}
              onChange={(value) => handleChange(value)}
              placeholder="State/Region"
            >
              {STATES.map((s) => (
                <Option key={s} value={s}>
                  {s}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className="flex mt-5 mb-8 space-x-4">
        <div className="w-full">
          <Input placeholder="Address" />
        </div>
      </div>
      <div className="flex mt-5 mb-8 space-x-4">
        <div className="w-full">
          <p className="mb-2">Add tags</p>
          <ReactTags
            tags={tags}
            suggestions={suggestions}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            delimiters={delimiters}
            placeholder={"Add more tags"}
          />
          <p className="mt-5">
            Suggested tags: <span className="underline mr-2">full time</span>{" "}
            <span className="underline mr-2">Contract</span>{" "}
            <span className="underline mr-2">freelance</span>
          </p>
        </div>
      </div>
      <div className="flex mt-5 space-x-8 justify-end">
        <button type="button" onClick={goBack}>
          Cancel
        </button>
        <Button name="Continue" type="button" onClick={handleClick} />
      </div>
    </div>
  );
};

export default NewGigBasicDataForm;
