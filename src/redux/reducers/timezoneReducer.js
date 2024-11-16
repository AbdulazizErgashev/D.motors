const initialState = "Asia/Tashkent";

const timezoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TIMEZONE":
      return action.payload;
    default:
      return state;
  }
};

export default timezoneReducer;
