import axios from "axios";
import i18n, { resources } from "../../i18n";
import { actions } from "../reducers/reducers";
const baseURL = "https://65c2b9b1f7e6ea59682baba9.mockapi.io/challenge";
const instance = axios.create({ baseURL });

export function toggleMode(mode) {
  return {
    type: actions.setMode,
    payload: mode,
  };
}

export function changeLanguage(language) {
  i18n.changeLanguage(language); // Make sure i18next changes the language globally
  return {
    type: actions.setLanguage,
    payload: language,
  };
}

export const postMode = (mode) => async (dispatch) => {
  try {
    dispatch(toggleMode(mode));
    localStorage.setItem("darkmode", mode);
    await instance.post("/darkmode", { mode });
  } catch (err) {
    console.error("post mode error", err);
  }
};

export const getMode = () => async (dispatch) => {
  try {
    const response = await instance.get("/darkmode");
    dispatch(toggleMode(response.data.mode));
  } catch (err) {
    console.error("get mode error", err);
  }
};

export function sendText(language) {
  let text = {};
  if (language === "tr") {
    text = resources.tr.translation;
  } else {
    text = resources.en.translation;
  }
  return async (dispatch) => {
    try {
      const response = await instance.post("/text", { language, text });
      console.log("Metin gönderimi başarılı.", response.data);
      dispatch(getText());
    } catch (error) {
      console.error("Metin gönderimi başarısız.", error);
    }
  };
}

export function getText(lang) {
  let id = null;
  if (lang === "tr") {
    id = 1;
  } else {
    id = 2;
  }
  return async (dispatch) => {
    try {
      const response = await instance.get(`/text/${id}`);
      console.log("Metin alma başarılı.", response.data);
      console.log("Çeviri - Translation : ", response.data.text);
    } catch (error) {
      console.error(error);
    }
  };
}
