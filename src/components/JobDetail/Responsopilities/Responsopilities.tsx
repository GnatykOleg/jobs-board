import { FC } from "react";

interface Props {
  resp: string;
}

const Responsopilities: FC<Props> = ({ resp }) => {
  return (
    <div className="mt-[43px]">
      <p className="font-bold text-xl text-primaryTextColor">
        Responsopilities
      </p>
      <p className="mt-[14px] text-lg font-normal text-primaryTextColor">
        {resp}
      </p>
    </div>
  );
};

export default Responsopilities;
