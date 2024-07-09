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
      className={`px-32 py-8 flex flex-col justify-between gap-8 transition duration-500 ease-in-out ${
        mode ? "bg-[#1A210B] text-[#CBF281]" : "bg-[#CBF281] text-[#4731D3]"
      }`}
    >
      <div>
        <h2 className="text-5xl font-bold">{t("12")}</h2>
      </div>
      <div
        className={`flex flex-row justify-between gap-8 border-2 rounded-lg transition duration-500 ease-in-out ${
          mode
            ? "bg-[#2B2727] text-[#C1BAED]"
            : "bg-white text-[#4731D3] border-purple"
        }`}
      >
        <img className="rounded-lg max-h-[250px] w-fit" src={ecommerceImg} />
        <div className="flex flex-col justify-center gap-4">
          <h3 className="font-bold text-3xl">e-commerce site</h3>
          <p
            className={`font-semibold transition duration-500 ease-in-out ${
              mode ? "text-white" : "text-[#383838]"
            }`}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea labore
            eum deleniti iure voluptas. Eos corrupti odio quibusdam, facere
            impedit at debitis doloremque ut dolorum corporis quis esse, magnam
            natus.
          </p>
          <span className="flex flex-row gap-4 text-lg">
            <button
              className={`rounded-3xl px-8 py-3 text-white font-semibold flex items-center transition duration-500 ease-in-out ${
                mode ? "bg-[#8173DA]" : "bg-[#4731D3]"
              }`}
            >
              react
            </button>
            <button
              className={`rounded-3xl px-8 py-3 text-white font-semibold flex items-center transition duration-500 ease-in-out ${
                mode ? "bg-[#8173DA]" : "bg-[#4731D3]"
              }`}
            >
              redux
            </button>
            <button
              className={`rounded-3xl px-8 py-3 text-white font-semibold flex items-center transition duration-500 ease-in-out ${
                mode ? "bg-[#8173DA]" : "bg-[#4731D3]"
              }`}
            >
              tailwind
            </button>
            <button
              className={`rounded-3xl px-8 py-3 text-white font-semibold flex items-center transition duration-500 ease-in-out ${
                mode ? "bg-[#8173DA]" : "bg-[#4731D3]"
              }`}
            >
              vercel
            </button>
          </span>
          <span className="flex flex-row items-center gap-4 font-semibold text-lg ">
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
        className={`flex flex-row justify-between gap-8 border-2 rounded-lg transition duration-500 ease-in-out ${
          mode
            ? "bg-[#2B2727] text-[#C1BAED]"
            : "bg-white text-[#4731D3] border-purple"
        }`}
      >
        <img className="rounded-lg max-h-[250px] w-fit" src={filmImg} />
        <div className="flex flex-col justify-center gap-4">
          <h3 className="font-bold text-3xl">Movie List</h3>
          <p
            className={`font-semibold transition duration-500 ease-in-out ${
              mode ? "text-white" : "text-[#383838]"
            }`}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea labore
            eum deleniti iure voluptas. Eos corrupti odio quibusdam, facere
            impedit at debitis doloremque ut dolorum corporis quis esse, magnam
            natus.
          </p>
          <span className="flex flex-row gap-4 text-lg">
            <button
              className={`rounded-3xl px-8 py-3 text-white font-semibold  flex items-center transition duration-500 ease-in-out ${
                mode ? "bg-[#8173DA]" : "bg-[#4731D3]"
              }`}
            >
              react
            </button>
            <button
              className={`rounded-3xl px-8 py-3 text-white font-semibold  flex items-center transition duration-500 ease-in-out ${
                mode ? "bg-[#8173DA]" : "bg-[#4731D3]"
              }`}
            >
              redux
            </button>
            <button
              className={`rounded-3xl px-8 py-3 text-white font-semibold  flex items-center transition duration-500 ease-in-out ${
                mode ? "bg-[#8173DA]" : "bg-[#4731D3]"
              }`}
            >
              vercel
            </button>
          </span>
          <span className="flex flex-row items-center gap-4 font-semibold text-lg ">
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
