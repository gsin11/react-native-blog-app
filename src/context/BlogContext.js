import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_BLOG_POST":
      return state.filter((blogPost) => blogPost.id !== action.payload.id);

    case "ADD_BLOG_POST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "ADD_BLOG_POST" });
  };
};

const removeBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_BLOG_POST", payload: { id } });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, removeBlogPost },
  []
);
