import React from "react";
import nodeLogo from "../assets/Skills-icons/node-js.png";
import jsLogo from "../assets/Skills-icons/js.png";
import reactLogo from "../assets/Skills-icons/react.png";
import vsCodeLogo from "../assets/Skills-icons/vs.png";
import reduxLogo from "../assets/Skills-icons/redux.png";
import figmaLogo from "../assets/Skills-icons/figma.png";
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
      title: "Figma",
      logo: figmaLogo,
    },
  ];

  return (
    <div
      className={`py-12 px-32 flex flex-col gap-8 transition duration-500 ease-in-out ${
        mode ? "bg-[#252128]" : "bg-white"
      }`}
    >
      <h2
        className={`text-5xl font-bold transition duration-500 ease-in-out ${
          mode ? "text-[#cbf281]" : "text-[#4832d3]"
        }`}
      >
        {t("3")}
      </h2>
      <div className="flex flex-wrap justify-between gap-12 font-bold">
        {skillSet.map((skill, index) => (
          <div
            key={index}
            className={`flex-1 flex-shrink-0 min-w-[30%] max-w-[30%] text-lg transition duration-500 ease-in-out ${
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
