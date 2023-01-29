import { FC } from "react";
import { useNavigate } from "react-router-dom";

const NoDataHelper: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="container flex flex-col">
      <h2 className="font-black text-center text-5xl  pt-5 mb-5">
        Data not found
      </h2>
      <button
        className="mx-auto max-w-xl bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
        onClick={() => navigate("/")}
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default NoDataHelper;
