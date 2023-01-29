import { FC } from "react";
import { Link } from "react-router-dom";

import sprite from "../../../assets/icons/sprite.svg";

import { useAppSelector } from "../../../services/hooks/reduxHooks";
import { dataSelector } from "../../../redux/jobsList/jobsListSelectors";
import convertDate from "../../../services/hooks/convertDate";
import JobsItemIcons from "./JobsItemIcons";

const JobsItem: FC = () => {
  const data = useAppSelector(dataSelector);

  return (
    <>
      {data.map(
        ({ id, createdAt, title, pictures, location, name, address }) => {
          return (
            <li
              key={id}
              className="transition-all hover:scale-105 bg-cardBg xlMin:bg-white shadow-lg mb-2 last:mb-0  rounded-lg px-4 pt-[13px] xlMin:py-[24px] pb-[27px] xlMin:relative"
            >
              <Link className="flex" to={`/jobs-list/${id}`}>
                <div className="min-w-[66px] lgMin:min-w-[85px] lgMax:pt-7">
                  <img
                    className="w-[66px] h-[66px] xlMin:w-[85px] xlMin:h-[85px] rounded-full"
                    src={pictures[0]}
                    alt={title}
                  />
                </div>

                <div className="w-[100%] xlMin:w-[750px] ml-[19px] xlMin:ml-[26px]">
                  <div className="lgMax:flex lgMax:items-center lgMax:justify-between lgMax:mb-[14px]">
                    <JobsItemIcons />
                    <p className="font-light xlMin:font-normal text-sm xlMin:text-base xlMin:absolute right-4 bottom-6 text-secondaryTextColor">
                      {convertDate(createdAt)}
                    </p>
                  </div>

                  <p className="mb-[5px] xlMin:mb-2 font-normal xlMin:font-bold text-lg xlMin:text-xl text-primaryTextColor">
                    {title}
                  </p>
                  <p className="mb-[7px] font-normal text-base text-secondaryTextColor">
                    {name}
                  </p>
                  <div className="flex items-center">
                    <svg width={13} height={18}>
                      <use href={`${sprite}#location`}></use>
                    </svg>
                    <p className="ml-2 font-normal text-base text-secondaryTextColor">
                      {address}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          );
        }
      )}
    </>
  );
};

export default JobsItem;
