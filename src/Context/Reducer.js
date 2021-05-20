export const Reducer = (state, action) => {
  switch (action.type) {
    case "loadbooks":
      return { ...state, books: action.payload };
    case "loadvideos":
      return { ...state, videos: action.payload };
    case "loadmemes":
      return { ...state, memes: action.payload };
    default:
      return state;
  }
};
