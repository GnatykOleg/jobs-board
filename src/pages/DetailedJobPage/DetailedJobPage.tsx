import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../services/hooks/reduxHooks";
import { dataSelector } from "../../redux/jobsList/jobsListSelectors";

import NoDataHelper from "../../components/NoDataHelper";

import Responsopilities from "../../components/JobDetail/Responsopilities/Responsopilities";

import MainDescription from "../../components/JobDetail/MainDescription/MainDescription";

import CompensationAndBenefits from "../../components/JobDetail/CompensationAndBenefits/CompensationAndBenefits";

import AttachedImages from "../../components/JobDetail/AttachedImages/AttachedImages";

import AdditionalInfo from "../../components/JobDetail/AdditionalInfo/AdditionalInfo";

import sprite from "../../assets/icons/sprite.svg";

const DetailedJobPage: FC = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const data = useAppSelector(dataSelector);

  const detailInfo = data?.find(({ id }) => id === postId);

  if (!detailInfo) {
    return <NoDataHelper />;
  }

  const {
    id,
    name,
    email,
    phone,
    title,
    salary,
    address,
    createdAt,
    updatedAt,
    description,
    benefits,
    location,
    pictures,
    employment_type,
  } = detailInfo;

  const descriptionFirstSeparation = description.split("Responsopilities:");

  const responsopilities = descriptionFirstSeparation[1].split(
    "Compensation & Benefits:"
  );

  const compensationAndBenefitsSeparation = responsopilities[1].split(".");

  compensationAndBenefitsSeparation.pop();

  return (
    <div className="container pt-[27px] pb-[50px] xlMin:pt-[56px]">
      <div className="xlMin:flex justify-between">
        <div className="xlMin:w-[774px]">
          <MainDescription
            title={title}
            salary={salary}
            desc={descriptionFirstSeparation[0]}
            createdAt={createdAt}
          />
          <Responsopilities resp={responsopilities[0]} />

          <CompensationAndBenefits
            compensationAndBenefitsSeparation={
              compensationAndBenefitsSeparation
            }
          />

          <div className="xlMin:flex xlMin:flex-col-reverse">
            <AttachedImages pictures={pictures} />
            <AdditionalInfo
              benefits={benefits}
              employment_type={employment_type}
            />
          </div>

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
        </div>

        <div className="bg-black w-[372px] h-[436px] xlMin:w-[402px] text-white">
          MAP
        </div>
      </div>
    </div>
  );
};

export default DetailedJobPage;
