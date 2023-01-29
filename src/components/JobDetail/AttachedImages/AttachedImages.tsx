import { FC } from "react";

import { nanoid } from "@reduxjs/toolkit";

interface Props {
  pictures: string[];
}

const AttachedImages: FC<Props> = ({ pictures }) => {
  return (
    <div className="xlMin:flex-col  lgMax:mb-[63px] lgMin:mt-[63px]">
      <h3 className="pb-3 mb-6  font-bold text-3xl text-primaryTextColor border-b-[1px] border-primaryTextColor ">
        Attached images
      </h3>

      <div className="flex overflow-x-auto pb-3 ">
        {pictures.map((el) => (
          <img
            key={nanoid()}
            className="mr-[10px] last:mr-0 rounded-lg"
            src={el}
            alt="alt"
          />
        ))}
      </div>
    </div>
  );
};

export default AttachedImages;
