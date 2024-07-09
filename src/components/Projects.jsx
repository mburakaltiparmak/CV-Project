import React from "react";
import ecommerceImg from "../assets/ecommerce.png";
import filmImg from "../assets/film.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Projects = (props) => {
  const mode = useSelector((state) => state.main.mode);
  const { t } = useTranslation();
  return (
    <div
      className={`px-32 py-8 sm:px-10 sm:py-4 flex flex-col sm:items-center justify-between gap-8 transition duration-500 ease-in-out ${
        mode ? "bg-[#1A210B] text-[#CBF281]" : "bg-[#CBF281] text-[#4731D3]"
      }`}
    >
      <div>
        <h2 className="text-5xl sm:text-4xl font-bold">{t("12")}</h2>
      </div>
      <div
        className={`flex flex-row sm:flex-col sm:items-center justify-between gap-8 sm:gap-4 border-2 sm:border-1 rounded-lg transition duration-500 ease-in-out ${
          mode
            ? "bg-[#2B2727] text-[#C1BAED]"
            : "bg-white text-[#4731D3] border-purple"
        }`}
      >
        <img
          className="rounded-lg max-h-[250px] sm:max-h-[200px] w-fit object-cover"
          src={ecommerceImg}
        />
        <div className="flex flex-col justify-center gap-4 sm:items-center">
          <h3 className="font-bold text-3xl">e-commerce site</h3>
          <p
            className={`font-semibold sm:text-center transition duration-500 ease-in-out ${
              mode ? "text-white" : "text-[#383838]"
            }`}
          >
            {t("18")}
          </p>
          <span className="flex flex-row gap-4 sm:gap-2 text-lg sm:text-base  sm:items-center">
            <button
              className={`rounded-3xl sm:px-4 px-8 py-3 sm:py-1 text-white font-semibold flex items-center transition duration-500 ease-in-out ${
                mode ? "bg-[#8173DA]" : "bg-[#4731D3]"
              }`}
            >
              react
            </button>
            <button
              className={`rounded-3xl sm:px-4 px-8 py-3 sm:py-1 text-white font-semibold flex items-center transition duration-500 ease-in-out ${
                mode ? "bg-[#8173DA]" : "bg-[#4731D3]"
              }`}
            >
              redux
            </button>
            <button
              className={`rounded-3xl sm:px-4 px-8 py-3 sm:py-1 text-white font-semibold flex items-center transition duration-500 ease-in-out ${
                mode ? "bg-[#8173DA]" : "bg-[#4731D3]"
              }`}
            >
              tailwind
            </button>
            <button
              className={`rounded-3xl sm:px-4 px-8 py-3 sm:py-1 text-white font-semibold flex items-center transition duration-500 ease-in-out ${
                mode ? "bg-[#8173DA]" : "bg-[#4731D3]"
              }`}
            >
              vercel
            </button>
          </span>
          <span className="flex flex-row items-center gap-4 font-semibold text-lg sm:text-base sm:py-2 ">
            <a
              className={`underline transition duration-500 ease-in-out ${
                mode ? "text-white" : "text-black"
              }`}
              href="https://ecommerce-sage-xi.vercel.app"
            >
              {t("13")}
            </a>
            <a
              className={`underline transition duration-500 ease-in-out ${
                mode ? "text-white" : "text-black"
              }`}
              href="https://github.com/mburakaltiparmak/ecommerce"
            >
              Github
            </a>
          </span>
        </div>
      </div>
      <div
        className={`flex flex-row sm:flex-col sm:items-center justify-between gap-8 sm:gap-4 border-2 sm:border-1 rounded-lg transition duration-500 ease-in-out ${
          mode
            ? "bg-[#2B2727] text-[#C1BAED]"
            : "bg-white text-[#4731D3] border-purple"
        }`}
      >
        <img
          className="rounded-lg max-h-[250px] sm:max-h-[200px] w-fit object-cover"
          src={filmImg}
        />
        <div className="flex flex-col justify-center gap-4 sm:items-center">
          <h3 className="font-bold text-3xl">Movie List</h3>
          <p
            className={`font-semibold sm:text-center transition duration-500 ease-in-out ${
              mode ? "text-white" : "text-[#383838]"
            }`}
          >
            {t("19")}
          </p>
          <span className="flex flex-row gap-4 sm:gap-2 text-lg sm:text-base  sm:items-center">
            <button
              className={`rounded-3xl sm:px-4 px-8 py-3 sm:py-1 text-white font-semibold flex items-center transition duration-500 ease-in-out ${
                mode ? "bg-[#8173DA]" : "bg-[#4731D3]"
              }`}
            >
              react
            </button>
            <button
              className={`rounded-3xl sm:px-4 px-8 py-3 sm:py-1 text-white font-semibold flex items-center transition duration-500 ease-in-out ${
                mode ? "bg-[#8173DA]" : "bg-[#4731D3]"
              }`}
            >
              redux
            </button>
            <button
              className={`rounded-3xl sm:px-4 px-8 py-3 sm:py-1 text-white font-semibold flex items-center transition duration-500 ease-in-out ${
                mode ? "bg-[#8173DA]" : "bg-[#4731D3]"
              }`}
            >
              vercel
            </button>
          </span>
          <span className="flex flex-row items-center gap-4 font-semibold text-lg sm:text-base sm:py-2 ">
            <a
              className={`underline transition duration-500 ease-in-out ${
                mode ? "text-white" : "text-black"
              }`}
              href="https://s11d3.vercel.app"
            >
              {t("13")}
            </a>
            <a
              className={`underline transition duration-500 ease-in-out ${
                mode ? "text-white" : "text-black"
              }`}
              href="https://github.com/mburakaltiparmak/s11d3"
            >
              Github
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Projects;
