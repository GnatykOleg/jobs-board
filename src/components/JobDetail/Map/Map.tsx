import { FC } from "react";
import GoogleMapReact from "google-map-react";

import sprite from "../../../assets/icons/sprite.svg";

interface Props {
  location: { lat: number; long: number };
  email: string;
  phone: string;
  adress: string;
  name: string;
}

const Map: FC<Props> = ({ location, email, phone, adress, name }) => {
  const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

  return (
    <div className="lgMax:mt-[63px]">
      <h4 className="xlMin:hidden pb-3 mb-6 font-bold text-3xl text-primaryTextColor  border-b-[1px] border-primaryTextColor ">
        Contacts
      </h4>
      <div className="flex items-center flex-col bg-mapBG rounded-lg w-[372px] h-[436px] xlMin:w-[402px] text-white">
        <div className="pt-[31px] pb-[31px]">
          <p className="text-[#E7EAF0] mb-[17px]">{name}</p>
          <div className="mb-[6px] flex">
            <svg className="mr-2" width={13} height={18}>
              <use href={`${sprite}#location`}></use>
            </svg>
            <p className="text-[#E7EAF0]">{adress}</p>
          </div>
          <p className="text-[#E7EAF0]">{phone}</p>
          <p>{email}</p>
        </div>
        <div className="bg-red-600 w-[100%] h-[100%] rounded-b-lg">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={{ lat: location.lat, lng: location.long }}
            defaultZoom={11}
          >
            <AnyReactComponent
              text={
                <svg className="fill-white color-white" width={13} height={18}>
                  <use href={`${sprite}#location`}></use>
                </svg>
              }
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Map;
