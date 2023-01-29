import { FC } from "react";

import { useNavigate } from "react-router-dom";

import sprite from "../../assets/icons/sprite.svg";

const ButtonBack: FC = () => {
  const navigate = useNavigate();
  return (
    <button
      className="mt-[97px] flex items-center transition-all hover:scale-105"
      onClick={() => navigate("/")}
    >
      <svg width={20} height={20}>
        <use href={`${sprite}#arrow`}></use>
      </svg>
      <span className="ml-[10px] text-sm font-semibold text-primaryTextColor">
        RETURN TO JOB BOARD
      </span>
    </button>
  );
};

export default ButtonBack;
