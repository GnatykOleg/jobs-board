import { FC } from "react";

import convertDate from "../../../services/hooks/convertDate";
import MainDescriptionsButtons from "./MainDescriptionsButtons";

interface Props {
  title: string;
  salary: string;
  createdAt: string;
  desc: string;
}

const MainDescription: FC<Props> = ({ title, desc, createdAt, salary }) => {
  return (
    <>
      <div className="xlMin:flex xlMin:justify-between xlMin:mb-[39px] xlMin:border-b-[1px] border-primaryTextColor">
        <h2 className="lgMax:pb-3 xlMin:pb-[9px] lgMax:mb-6 font-bold text-3xl text-primaryTextColor lgMax:border-b-[1px] border-primaryTextColor">
          Job Details
        </h2>
        <MainDescriptionsButtons />
      </div>

      <div className="xlMin:relative mb-[14px] xlMin:mb-[7px] lgMax:flex flex-wrap items-center xlMin:items-start justify-between">
        <p className="xlMin:max-w-[501px] lgMax:mb-[5px]  text-2xl font-bold text-primaryTextColor">
          {title}
        </p>

        <p className="font-light xlMin:font-normal text-sm xlMin:text-base  text-secondaryTextColor">
          {convertDate(createdAt)}
        </p>

        <div className="xlMin:absolute top-0 right-0 flex flex-col xlMin:flex-col-reverse">
          <p className="lgMax:mb-1 text-sm xlMin:text-lg font-normal text-primaryTextColor">
            Brutto, per year
          </p>
          <p className="font-bold text-xl text-primaryTextColor">€{salary}</p>
        </div>
      </div>

      <p className="text-lg font-normal text-primaryTextColor">{desc}</p>
    </>
  );
};

export default MainDescription;
