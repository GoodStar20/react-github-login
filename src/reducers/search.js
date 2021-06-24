import * as CONSTS from '../constant/const';

let defaultState = { loading: false, loginData: [], totalCount: 0, searchKey: '', error: '' };

export default (state = defaultState, action) => {
  switch (action.type) {
    case CONSTS.LOADING:
      return {
        ...state,
        loading: true,
      };
    case CONSTS.LOGIN_DATA:
      return {
        ...state,
        loading: false,
        loginData: action.payload,
        error: '',
      };
    case CONSTS.LOGINDATA_TOTAL_CONNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    case CONSTS.SEARCH_KEY:
      return {
        ...state,
        searchKey: action.payload,
      };
    case CONSTS.GET_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
