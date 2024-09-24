import React, { useEffect, useState } from "react";
import "../style/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImg from "../assets/2-modified.png";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faLanguage,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLanguage,
  postMode,
  sendText,
  toggleMode,
  getText,
} from "../store/actions/actions";
import { useTranslation } from "react-i18next";

const Header = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.main.mode);
  const [lang, setLang] = useState(localStorage.getItem("language") || "tr");

  useEffect(() => {
    const lastMode = localStorage.getItem("darkmode");
    if (lastMode !== null && lastMode !== undefined) {
      dispatch(toggleMode(JSON.parse(lastMode)));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(changeLanguage(lang));
    /* dispatch(sendText(lang)); */
  }, [lang, dispatch]);

  const switchButtonText = () => {
    return lang === "tr" ? "TR" : "EN";
  };

  const languageHandler = () => {
    const newLang = lang === "tr" ? "en" : "tr";
    setLang(newLang);
    localStorage.setItem("language", newLang);
    dispatch(getText(newLang));
  };

  const darkModeHandler = () => {
    dispatch(postMode(!mode));
  };

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(mode));
  }, [mode]);

  const darkModeText = () => {
    return mode ? "DARK" : "LIGHT";
  };

  return (
    <div
      className={`py-8 sm:py-4 flex flex-row lg:flex-col-reverse gap-4 px-10 justify-center transition duration-500 ease-in-out ${
        mode ? "dark-header" : "light-header"
      }`}
    >
      <div
        id="first-side"
        className="flex flex-col justify-between lg:gap-4 w-full"
      >
        <div className="flex flex-col items-start justify-between gap-4  lg:items-center ">
          <h2
            className={`text-2xl lg:text-3xl font-bold transition duration-500 ease-in-out  ${
              mode ? "text-yellow" : "text-white"
            }`}
          >
            M.Burak Altıparmak
          </h2>
          <h1
            className={`text-5xl lg:text-3xl font-bold w-full lg:text-center transition duration-500 ease-in-out  ${
              mode ? "text-white" : "text-yellow"
            }`}
          >
            {t("1")}
          </h1>
          <p
            className={`text-lg font-semibold transition duration-500 ease-in-out lg:text-center ${
              mode ? "text-yellow" : "text-white"
            }`}
          >
            {t("2")}
          </p>
        </div>

        <div
          id="button-container"
          className="flex flex-row font-bold text-xl gap-4 lg:justify-center"
        >
          <a
            href="https://github.com/mburakaltiparmak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`p-4 lg:p-3 rounded-lg flex flex-row gap-2 items-center transition duration-500 ease-in-out  ${
                mode
                  ? "border-white bg-[#252128] text-white"
                  : "border-black bg-white text-black"
              }`}
            >
              <FontAwesomeIcon icon={faGithub} />
              Github
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/mburakaltiparmak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`p-4 lg:p-3 border-1 rounded-lg flex flex-row gap-2 items-center transition duration-500 ease-in-out ${
                mode
                  ? "border-white bg-[#252128] text-white"
                  : "border-black bg-white text-black"
              }`}
            >
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </button>
          </a>
        </div>
      </div>
      <div
        id="second-side"
        className="flex flex-col items-center justify-between w-full gap-4 lg:items-center"
      >
        <div
          className="flex flex-row items-center gap-4 justify-between text-sm font-bold lg:py-0 lg:px-0 "
          id="switch-container"
        >
          <button
            value={lang}
            className="text-[#CBF281] text-lg flex flex-row items-center gap-2"
            onClick={languageHandler}
          >
            <FontAwesomeIcon className="text-3xl" icon={faLanguage} />
            {switchButtonText()}
          </button>
          <button
            className={`flex flex-row items-center text-lg gap-1 ${
              mode ? "text-yellow" : "text-purple"
            }`}
            onClick={darkModeHandler}
          >
            {mode ? (
              <FontAwesomeIcon
                className="h-[32px] font-normal "
                icon={faToggleOn}
              />
            ) : (
              <FontAwesomeIcon
                className="h-[32px] font-normal "
                icon={faToggleOff}
              />
            )}
            {darkModeText()}
          </button>
        </div>
        <img
          className={`h-[350px] md:h-[175px] border-4 rounded-full transition duration-500 ease-in-out object-cover ${
            mode ? "border-white" : "border-dark"
          }`}
          src={profileImg}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Header;
