const initialState = { data: [], isLoading: false, isError: false };

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_DETAIL_PROFILE_PENDING':
      return { ...state, isLoading: true };
    case 'GET_LIST_DETAIL_PROFILE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.rows,
      };
    case 'GET_LIST_DETAIL_PROFILE_REJECTED':
      return { ...state, isLoading: false, isError: true };
    case 'GET_LIST_PROFILE_RECIPE_PENDING':
      return { ...state, isLoading: true };
    case 'GET_LIST_PROFILE_RECIPE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.rows,
      };
    case 'GET_LIST_PROFILE_RECIPE_REJECTED':
      return { ...state, isLoading: false, isError: true };
    case 'GET_LIST_DETAIL_PENDING':
      return { ...state, isLoading: true };
    case 'GET_LIST_DETAIL_FULFILLED':
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    case 'GET_LIST_DETAIL_REJECTED':
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default recipeReducer;
