import { Input } from 'antd';
import React from 'react';
import { INewGigRenumerationForm } from "../../../../../models/IGig";
import Button from '../../../../../components/Button/Button';

const NewGigRenumerationForm: React.FC<INewGigRenumerationForm> = ({onClick, goBack}) => {
  const handleClick = (): void => {
    onClick();
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
      <div className="flex mt-5 space-x-8 justify-end">
        <button type="button" onClick={goBack}>
          Cancel
        </button>
        <Button name="Continue" type="button" onClick={handleClick} />
      </div>
    </div>
  );
}

export default NewGigRenumerationForm;