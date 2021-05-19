export const Reducer = (state, action) => {
  switch (action.type) {
    case "loadbooks":
      return { books: action.payload };
    case "loadvideos":
      return { videos: action.payload };
    case "loadmemes":
      return { memes: action.payload };
    default:
      return state;
  }
};
