import React, { useState } from "react";
import { useAlert } from 'react-alert';
import { Steps } from "antd";
import "./NewGigFrame.css";
import NewGigBasicDataForm from "../NewGigBasicDataForm/NewGigBasicDataForm";
import NewGigRenumerationForm from "../NewGigRenumerationForm/NewGigRenumerationForm";
import { useHistory } from "react-router-dom";

const { Step } = Steps;

const NewGigFrame: React.FC = () => {
  const [step, setStep] = useState<number>(0)
  const history = useHistory();
  const alert = useAlert();
  const handleClick = (): void => {
    if(step === 0) {
      setStep(1);
    }

    if (step === 1) {
      history.goBack();
      alert.success('Gig created successfully');
    }
  }

  const goBack = (): void => {
    setStep(0);
  }
  return (
    <div className="lg:px-20 px-10 py-10 sm:flex sm:flex-wrap grid sm:space-x-10">
      <div className="lg:w-1/5 sm:w-1/4 w-1/2 py-5 px-6 shadow-2xlLight sm:mb-0 mb-5 bg-white rounded-2xl gig__card">
        <Steps progressDot current={step} direction="vertical">
          <Step title="Basic Data" />
          <Step title="Renumeration" />
        </Steps>
      </div>
      {step === 0 && <NewGigBasicDataForm onClick={handleClick} />}
      {step === 1 && <NewGigRenumerationForm onClick={handleClick} goBack={goBack} />}
    </div>
  );
};

export default NewGigFrame;
