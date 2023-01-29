import { FC } from "react";

import sprite from "../../../assets/icons/sprite.svg";

const JobsItemIcons: FC = () => {
  return (
    <>
      <svg className="xlMin:hidden" width={54} height={10}>
        <use href={`${sprite}#rating`}></use>
      </svg>
      <svg
        className="lgMax:hidden absolute top-1/2 right-[196px] transform  -translate-y-1/2"
        width={96}
        height={18}
      >
        <use href={`${sprite}#rating-big`}></use>
      </svg>
      <svg
        className="lgMax:hidden absolute right-4 top-6"
        width={16}
        height={20}
      >
        <use href={`${sprite}#bookmark`}></use>
      </svg>
    </>
  );
};

export default JobsItemIcons;
