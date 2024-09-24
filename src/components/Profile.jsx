import React from "react";
import gradImg from "../assets/gradImg.jpg";
import profileImg from "../assets/profilImg.jpg";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Profile = (props) => {
  const mode = useSelector((state) => state.main.mode);
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-col justify-between px-10 py-8 gap-8 lg:items-center transition duration-500 ease-in-out ${
        mode ? "bg-[#171043]" : "bg-[#4731D3]"
      }`}
    >
      <h2 className="text-5xl md:text-4xl text-yellow font-bold">{t("4")}</h2>
      <div className="flex flex-row lg:flex-col-reverse justify-between gap-8 lg:items-center">
        <div className="flex flex-col justify-start lg:items-center gap-4 items-stretch w-full">
          <h3 className="text-3xl font-bold text-white">{t("5")}</h3>
          <div className="flex flex-col gap-4 w-full items-center lg:items-start lg:justify-center lg:w-fit">
            <span className="profile-infos">
              <p className="w-[125px] ">{t("6")}:</p>
              <p className="text-white">10.12.1996</p>
            </span>
            <hr className="w-full text-white" />
            <span className="profile-infos ">
              <p className="w-[125px]">{t("7")}:</p>
              <p className="text-white">Kayseri</p>
            </span>
            <hr className="w-full text-white" />
            <span className="profile-infos">
              <p className="w-[125px]">{t("8")}:</p>
              <p className="text-white text-right w-[150px] lg:text-left">
                {t("10")}
              </p>
            </span>
            <hr className="w-full text-white" />
            <span className="profile-infos">
              <p className="w-[125px]">{t("9")}:</p>
              <p className="text-white">Frontend,UI</p>
            </span>
            <hr className="w-full text-white" />
          </div>
        </div>

        <div className="flex flex-row sm:gap-4 lg:flex-col lg:items-center">
          <div className="flex flex-row justify-between  lg:flex-col items-start gap-8 lg:items-center">
            <img
              className={`rounded-lg h-[350px] sm:h-[175px] w-fit object-cover shadow-md drop-shadow-2xl ${
                mode ? "shadow-white" : "shadow-black"
              }`}
              src={gradImg}
              alt=""
            />
            <span className="flex flex-col gap-4 lg:items-center">
              <h3 className="text-3xl font-bold text-yellow">{t("11")}</h3>
              <div className="text-lg font-semibold text-white lg:text-center ">
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
