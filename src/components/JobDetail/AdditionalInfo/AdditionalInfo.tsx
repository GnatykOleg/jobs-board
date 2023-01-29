import { FC } from "react";

import { nanoid } from "@reduxjs/toolkit";

interface Props {
  benefits: string[];
  employment_type: string[];
}

const AdditionalInfo: FC<Props> = ({ benefits, employment_type }) => {
  const benefitsElements = benefits.map((el) => (
    <p
      key={nanoid()}
      className="rounded-lg mr-[9px] last:mr-0 w-[122px] xlMin:w-[222px]  py-[17px] text-center text-base font-bold  text-benefitsTextColor bg-benefitsBackgroundColor border-2 border-borderColor "
    >
      {el}
    </p>
  ));

  const employmentType = employment_type.map((el) => (
    <p
      key={nanoid()}
      className="rounded-lg mr-[9px] last:mr-0 w-[122px] xlMin:w-[222px]  py-[17px] text-center text-base font-bold bg-employmentTypeBackgroundColor text-employmentTypeTextColor  "
    >
      {el}
    </p>
  ));

  return (
    <div className="xlMin:flex-col">
      <h4 className="pb-3 mb-6 font-bold text-3xl text-primaryTextColor  border-b-[1px] border-primaryTextColor ">
        Additional info
      </h4>
      <p className="mb-[10px] font-normal text-lg text-primaryTextColor">
        Employment type
      </p>
      <div className="flex ">{employmentType}</div>
      <p className="mb-[10px] mt-[22px] font-normal text-lg text-primaryTextColor">
        Benefits
      </p>
      <div className="flex">{benefitsElements}</div>
    </div>
  );
};

export default AdditionalInfo;
