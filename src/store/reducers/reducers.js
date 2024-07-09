const initialState = {
  mode: null,
  language: "tr",
};
export const actions = {
  setMode: "SET_MODE",
  setLanguage: "SET_LANGUAGE",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.setMode:
      return {
        ...state,
        mode: action.payload,
      };
    case actions.setLanguage:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
