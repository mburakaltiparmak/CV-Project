import React from "react";

import profileImg from "../assets/profilImg.jpg";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Profile = (props) => {
  const mode = useSelector((state) => state.main.mode);
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-col justify-between px-32 py-8 gap-12 sm:px-10 sm:py-8 sm:gap-8 sm:items-center transition duration-500 ease-in-out ${
        mode ? "bg-[#171043]" : "bg-[#4731D3]"
      }`}
    >
      <h2 className="text-5xl sm:text-4xl text-yellow font-bold">{t("4")}</h2>
      <div className="flex flex-row sm:flex-col-reverse justify-between gap-4 sm:gap-16 sm:items-center ">
        <div className="flex flex-col justify-start gap-8 items-stretch w-full">
          <h3 className="text-3xl font-bold text-white">{t("5")}</h3>
          <div className="flex flex-col gap-4">
            <span className="profile-infos">
              <p className="sm:pr-2">{t("6")} :</p>
              <p className="text-white">10.12.1996</p>
            </span>
            <span className="profile-infos ">
              <p className="sm:pr-2">{t("7")} :</p>
              <p className="text-white">Kayseri</p>
            </span>
            <span className="profile-infos">
              <p className="sm:pr-2">{t("8")} :</p>
              <span className="flex flex-col items-end text-end">
                <p className="text-white">{t("10")}</p>
                <p className="text-white">{t("16")}</p>
              </span>
            </span>
            <span className="profile-infos">
              <p>{t("9")} :</p>
              <p className="text-white">Frontend,UI</p>
            </span>
          </div>
        </div>

        <div className="flex flex-row sm:gap-4  sm:flex-col sm:items-center ">
          <div className="flex flex-row sm:flex-col items-start gap-8 sm:items-center">
            <img
              className={`rounded-lg h-[350px] sm:h-[175px] w-fit object-cover shadow-md drop-shadow-2xl ${
                mode ? "shadow-white" : "shadow-black"
              }`}
              src={profileImg}
              alt=""
            />
            <span className="flex flex-col gap-4 sm:items-center">
              <h3 className="text-3xl font-bold text-yellow">{t("11")}</h3>
              <div className="text-lg font-semibold text-white sm:text-center w-3/4 ">
                <p>{t("17")}</p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
