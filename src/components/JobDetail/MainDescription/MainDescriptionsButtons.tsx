import { FC } from "react";
import sprite from "../../../assets/icons/sprite.svg";

const MainDescriptionsButtons: FC = () => {
  return (
    <div className="lgMax:mb-[32px] flex">
      <button className="mr-9 xlMin:mr-[24px] flex items-center transition-all hover:scale-105 ">
        <svg className="xlMin:hidden" width={20} height={20}>
          <use href={`${sprite}#star`}></use>
        </svg>
        <svg className="lgMax:hidden" width={16} height={20}>
          <use href={`${sprite}#bookmark`}></use>
        </svg>
        <span className="ml-3 font-normal text-base xlMin:text-lg text-primaryTextColor">
          Save to my list
        </span>
      </button>

      <button className="flex items-center transition-all hover:scale-105 ">
        <svg width={20} height={20}>
          <use href={`${sprite}#share`}></use>
        </svg>
        <span className="ml-[10px] font-normal text-base xlMin:text-lg text-primaryTextColor">
          Share
        </span>
      </button>
    </div>
  );
};

export default MainDescriptionsButtons;
