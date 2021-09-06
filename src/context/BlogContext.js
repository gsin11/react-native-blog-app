import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "EDIT_BLOG_POST":
      return state.map((blogPost) =>
        blogPost.id === action.payload.id ? action.payload : blogPost
      );

    case "DELETE_BLOG_POST":
      return state.filter((blogPost) => blogPost.id !== action.payload.id);

    case "ADD_BLOG_POST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    try {
      await dispatch({ type: "ADD_BLOG_POST", payload: { title, content } });
      if (callback) {
        callback();
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const removeBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_BLOG_POST", payload: { id } });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "EDIT_BLOG_POST", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, removeBlogPost, editBlogPost },
  []
);
