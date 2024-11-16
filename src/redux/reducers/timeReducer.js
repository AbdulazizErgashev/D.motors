const initialState = "";

const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TIME":
      return action.payload;
    default:
      return state;
  }
};

export default timeReducer;
