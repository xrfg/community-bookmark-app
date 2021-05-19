export const Reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { data: action.payload };
    default:
      return state;
  }
};
