import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";

interface Props {
  compensationAndBenefitsSeparation: string[];
}

const CompensationAndBenefits: FC<Props> = ({
  compensationAndBenefitsSeparation,
}) => {
  return (
    <div className="mt-[43px] mb-[132px]">
      <p className="mb-[14px] font-bold text-xl text-primaryTextColor">
        Compensation & Benefits:
      </p>

      <p>Our physicians enjoy a wide range of benefits, including:</p>
      {compensationAndBenefitsSeparation.map((el) => (
        <p key={nanoid()} className="text-lg font-normal text-primaryTextColor">
          ∎{el}
        </p>
      ))}
      <button className="mt-[28px]   xlMin:mb-[86px] transition-all hover:bg-red-400 lgMax:mx-auto py-[18px] px-[30px] text-xs font-semibold text-white uppercase bg-buttonBgColor rounded-lg">
        Apply now
      </button>
    </div>
  );
};

export default CompensationAndBenefits;
