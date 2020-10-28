import * as types from "redux/constants/post.constant";
const initialState = {
  loading: false, //tai sao lai can loading
  error: "",
  posts: [],
};
const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_POST_REQUEST:
      return { ...state, loading: true };
    case types.GET_POST_SUCCESS:
      console.log("payload:", payload);
      return {
        ...state,
        loading: false,
        posts: payload,
      };

    case types.GET_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return { ...state };
  }
};
export default postReducer;
