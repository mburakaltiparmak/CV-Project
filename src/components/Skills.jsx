import React from "react";
import nodeLogo from "../assets/Skills-icons/node-js.png";
import jsLogo from "../assets/Skills-icons/js.png";
import reactLogo from "../assets/Skills-icons/react.png";
import vsCodeLogo from "../assets/Skills-icons/vs.png";
import reduxLogo from "../assets/Skills-icons/redux.png";
import figmaLogo from "../assets/Skills-icons/figma.png";
import nextJsLogo from "../assets/Skills-icons/next-js.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const mode = useSelector((state) => state.main.mode);
  const skillSet = [
    {
      title: "Javascript",
      logo: jsLogo,
    },
    {
      title: "Node",
      logo: nodeLogo,
    },
    {
      title: "React",
      logo: reactLogo,
    },
    {
      title: "VS Code",
      logo: vsCodeLogo,
    },
    {
      title: "Redux",
      logo: reduxLogo,
    },
    {
      title: "Next.js",
      logo: nextJsLogo,
    },
  ];

  return (
    <div
      className={`px-10 py-12 md:py-6 flex flex-col gap-8 transition duration-500 ease-in-out ${
        mode ? "bg-[#252128]" : "bg-white"
      }`}
    >
      <h2
        className={`text-5xl md:text-4xl lg:text-center font-bold transition duration-500 ease-in-out ${
          mode ? "text-[#cbf281]" : "text-[#4832d3]"
        }`}
      >
        {t("3")}
      </h2>
      <div className="flex flex-row flex-wrap gap-12 justify-center items-center sm:flex-col sm:items-center sm:gap-2 font-bold md:font-semibold">
        {skillSet.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-row gap-4 w-[30%] lg:w-[40%] text-lg sm:text-base transition duration-500 ease-in-out ${
              mode ? "skills-container-dark" : "skills-container-light"
            }`}
          >
            <img className="skills-logo" src={skill.logo} alt={skill.title} />
            <p className="text-center">{skill.title.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
