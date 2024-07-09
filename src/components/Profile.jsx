import React from "react";

import profileImg from "../assets/profilImg.jpg";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Profile = (props) => {
  const mode = useSelector((state) => state.main.mode);
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-col justify-between px-32 py-8 gap-12 transition duration-500 ease-in-out ${
        mode ? "bg-[#171043]" : "bg-[#4731D3]"
      }`}
    >
      <h2 className="text-5xl text-yellow font-bold">{t("4")}</h2>
      <div className="flex flex-row justify-between gap-16">
        <div className="flex flex-col justify-start gap-16 w-full">
          <h3 className="text-3xl font-bold text-white">{t("5")}</h3>
          <div className="flex flex-col gap-4  ">
            <span className="profile-infos">
              <p className="w-full">{t("6")} :</p>
              <p className="text-white">10.12.1996</p>
            </span>
            <span className="profile-infos">
              <p className="w-full">{t("7")} :</p>
              <p className="text-white">Kayseri</p>
            </span>
            <span className="profile-infos ">
              <p className="w-full">{t("8")} :</p>
              <p className="text-white w-full">{t("10")}</p>
            </span>
            <span className="profile-infos">
              <p className="w-full">{t("9")} :</p>
              <p className="text-white">Frontend,UI</p>
            </span>
          </div>
        </div>
        <div className="w-full ">
          <img
            className=" rounded-lg h-[350px] w-fit"
            src={profileImg}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-8 w-full ">
          <h3 className="text-3xl font-bold text-yellow">{t("11")}</h3>
          <div className="text-lg font-semibold text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              inventore accusamus, quisquam vero non quaerat dicta sint totam
              doloribus? Inventore, asperiores consectetur enim repudiandae
              quibusdam ratione minima voluptate laudantium atque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
