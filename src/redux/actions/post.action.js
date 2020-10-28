import * as types from "redux/constants/post.constant";
import api from "redux/api";
const getPost = () => async (dispatch) => {
  dispatch({ type: types.GET_POST_REQUEST, payload: null });

  try {
    const res = await api.get(`/posts`);
    console.log("res ne", res);
    dispatch({
      type: types.GET_POST_SUCCESS,
      payload: res.data.data,
    });
    console.log("post list  day ne", res.data.data);
  } catch (error) {
    dispatch({ type: types.GET_POST_FAILURE, payload: error });
  }
};

export const postActions = {
  getPost,
};
