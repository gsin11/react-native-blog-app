import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "GET_BLOG_POSTS":
      return action.payload;

    case "EDIT_BLOG_POST":
      return state.map((blogPost) =>
        blogPost.id === action.payload.id ? action.payload : blogPost
      );

    case "DELETE_BLOG_POST":
      return state.filter((blogPost) => blogPost.id !== action.payload.id);

    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "GET_BLOG_POSTS", payload: response.data });
  };
};

const addBlogPost = () => {
  return async (title, content, callback) => {
    try {
      await jsonServer.post("/blogposts", { title, content });
      if (callback) {
        callback();
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const removeBlogPost = (dispatch) => {
  return async (id) => {
    try {
      await jsonServer.delete(`/blogposts/${id}`);
      dispatch({ type: "DELETE_BLOG_POST", payload: { id } });
    } catch (error) {
      console.log(error);
    }
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    try {
      await await jsonServer.put(`/blogposts/${id}`, { id, title, content });
      dispatch({ type: "EDIT_BLOG_POST", payload: { id, title, content } });
      if (callback) {
        callback();
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, removeBlogPost, editBlogPost, getBlogPosts },
  []
);
