import { FC } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../services/hooks/reduxHooks";
import { dataSelector } from "../../redux/jobsList/jobsListSelectors";

import {
  NoDataHelper,
  Responsopilities,
  MainDescription,
  CompensationAndBenefits,
  AttachedImages,
  AdditionalInfo,
  Map,
  ButtonBack,
} from "../../components";

const DetailedJobPage: FC = () => {
  const { postId } = useParams();

  const data = useAppSelector(dataSelector);

  const detailInfo = data?.find(({ id }) => id === postId);

  if (!detailInfo) {
    return <NoDataHelper />;
  }

  const {
    name,
    email,
    phone,
    title,
    salary,
    address,
    createdAt,

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

          <div className="lgMax:hidden">
            <ButtonBack />
          </div>
        </div>
        <Map
          location={location}
          adress={address}
          email={email}
          phone={phone}
          name={name}
        />

        <div className="xlMin:hidden">
          <ButtonBack />
        </div>
      </div>
    </div>
  );
};

export default DetailedJobPage;
