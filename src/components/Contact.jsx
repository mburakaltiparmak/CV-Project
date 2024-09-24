import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faCodepen,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Contact = (props) => {
  const mode = useSelector((state) => state.main.mode);
  const { t } = useTranslation();

  const icons = [
    {
      icon: faTwitter,
      className: " w-[25px] h-[25px]",
      link: "https://twitter.com/phantasticum_",
    },
    {
      icon: faCodepen,
      className: " w-[25px] h-[25px]",
      link: "https://codepen.io",
    },
    {
      icon: faAt,
      className: " w-[25px] h-[25px]",
      link: "mailto:mburakaltiparmak@gmail.com",
    },
    {
      icon: faInstagram,
      className: " w-[25px] h-[25px]",
      link: "https://instagram.com/phantasticum_",
    },
  ];

  return (
    <div
      className={`flex flex-col gap-8 items-center text-center transition duration-500 ease-in-out px-10 py-8 lg:py-4 ${
        mode ? "bg-[#252128] text-[#8F88FF]" : "bg-white text-[#4731D3]"
      }`}
    >
      <h2 className="text-4xl sm:text-3xl font-bold">{t("14")}</h2>

      <p
        className={`text-xl font-semibold transition duration-500 ease-in-out ${
          mode ? "text-white" : "text-black"
        }`}
      >
        {t("15")}
      </p>

      <a className="text-xl underline" href="mailto:mburakaltiparmak@gmail.com">
        mburakaltiparmak@gmail.com
      </a>

      <div
        className={`flex flex-wrap gap-5 ${
          mode ? "text-white" : "text-purple"
        }`}
      >
        {icons.map((iconObject, index) => (
          <a
            key={index}
            href={iconObject.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={iconObject.icon}
              className={iconObject.className}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
