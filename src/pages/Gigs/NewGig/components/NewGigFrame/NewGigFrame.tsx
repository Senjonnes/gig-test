import React, { useState } from "react";
import { Input, Steps } from "antd";
import { WithContext as ReactTags } from "react-tag-input";
import "./NewGigFrame.css";
import { ITag } from "../../../../../models/IGig";

const { Step } = Steps;
const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];

const NewGigFrame: React.FC = () => {
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
  return (
    <div className="lg:px-20 px-10 py-10 sm:flex sm:flex-wrap grid sm:space-x-10">
      <div className="lg:w-1/5 sm:w-1/4 w-1/2 py-5 px-6 shadow-2xlLight sm:mb-0 mb-5 bg-white rounded-2xl gig__card">
        <Steps progressDot current={0} direction="vertical">
          <Step title="Basic Data" />
          <Step title="Renumeration" />
        </Steps>
      </div>
      <div className="sm:w-1/2 py-5 px-10 border border-faintedBlack bg-white rounded-2xl text-lightDarkF">
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
              <Input placeholder="Country" />
            </div>
            <div className="w-1/2">
              <Input placeholder="State/Region" />
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
            <p>
              Suggested tags: <span className="underline mr-2">full time</span>{" "}
              <span className="underline mr-2">Contract</span>{" "}
              <span className="underline mr-2">freelance</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGigFrame;
