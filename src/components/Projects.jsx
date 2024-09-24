import React from "react";
import ecommerceImg from "../assets/ecommerce.png";
import filmImg from "../assets/film.png";
import pizzaImg from "../assets/pizza.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Badge } from "@radix-ui/themes";

const Projects = (props) => {
  const mode = useSelector((state) => state.main.mode);
  const { t } = useTranslation();
  const projectData = [
    {
      name: "e-commerce site",
      description: t("18"),
      img: ecommerceImg,
      badges: ["react", "redux", "tailwind", "vercel"],
      website: "https://ecommerce-sage-xi.vercel.app/",
      github: "https://github.com/mburakaltiparmak/ecommerce",
    },
    {
      name: "Fav Movie List",
      description: t("19"),
      img: filmImg,
      badges: ["react", "redux", "tailwind", "vercel"],
      website: "https://ecommerce-sage-xi.vercel.app/",
      github: "https://github.com/mburakaltiparmak/ecommerce",
    },
    {
      name: "Pizza Order Site",
      description: t("20"),
      img: pizzaImg,
      badges: ["react", "redux", "tailwind", "vercel", "nextjs", "shadcn"],
      website: "https://nextjs-pizza-mu.vercel.app/",
      github: "https://github.com/mburakaltiparmak/nextjs-pizza",
    },
  ];

  return (
    <div
      className={`py-8 px-10 lg:py-4 flex flex-col lg:items-center justify-between gap-8 transition duration-500 ease-in-out ${
        mode ? "bg-[#1A210B] text-[#CBF281]" : "bg-[#CBF281] text-[#4731D3]"
      }`}
    >
      <div>
        <h2 className="text-5xl sm:text-4xl font-bold">{t("12")}</h2>
      </div>
      {projectData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-row lg:flex-col lg:items-center justify-start gap-8 lg:gap-4 border-2 md:border-1 rounded-lg transition duration-500 ease-in-out ${
            mode
              ? "bg-[#2B2727] text-[#C1BAED]"
              : "bg-white text-[#4731D3] border-purple"
          }`}
        >
          <img
            className="rounded-lg h-[300px] lg:h-[200px] w-[400px] object-cover"
            src={item.img}
            alt={item.name}
          />
          <div className="flex flex-col justify-start items-start gap-4 py-2 lg:items-center">
            <h3 className="font-bold text-3xl">{item.name}</h3>
            <p
              className={`font-semibold  transition duration-500 ease-in-out  lg:max-w-[300px] ${
                mode ? "text-white" : "text-[#383838]"
              }`}
            >
              {item.description}
            </p>
            <span className="flex flex-row flex-wrap gap-4 lg:gap-2 text-lg lg:text-base lg:items-center lg:justify-center">
              {item.badges.map((badge, badgeIndex) => (
                <Badge
                  key={badgeIndex}
                  variant="solid"
                  size="3"
                  radius="full"
                  className="w-[70px] h-[35px] rounded-3xl text-white font-semibold flex justify-center items-center transition duration-500 ease-in-out"
                  color={`${mode ? "purple" : "indigo"}`}
                  highContrast
                >
                  {badge}
                </Badge>
              ))}
            </span>
            <span className="flex flex-row items-center gap-4 font-semibold text-lg sm:text-base sm:py-2 ">
              <a
                className={`underline transition duration-500 ease-in-out ${
                  mode ? "text-white" : "text-black"
                }`}
                href={item.website}
              >
                {t("13")}
              </a>
              <a
                className={`underline transition duration-500 ease-in-out ${
                  mode ? "text-white" : "text-black"
                }`}
                href={item.github}
              >
                Github
              </a>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
