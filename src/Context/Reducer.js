export const Reducer = (state, action) => {
  switch (action.type) {
    case "loadbooks":
      return { ...state, books: action.payload, filteredBooks: action.payload };
    case "loadvideos":
      return { ...state, videos: action.payload };
    case "loadmemes":
      return { ...state, memes: action.payload };
    case "searchbooks":
      return { ...state, filteredBooks: action.payload };
    case "searchstring":
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
};
