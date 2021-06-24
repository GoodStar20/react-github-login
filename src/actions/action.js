import * as CONSTS from '../constant/const';
import axios from 'axios';

export const searchUser = (searchKey, page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CONSTS.LOADING });
      dispatch({ type: CONSTS.SEARCH_KEY, payload: searchKey });
      const result = await axios.get(
        `https://api.github.com/search/users?q=${searchKey}%20in:login&per_page=9&page=${page}`,
      );
      if (result.status === 200) {
        dispatch({ type: CONSTS.LOGIN_DATA, payload: result.data.items });
        dispatch({ type: CONSTS.LOGINDATA_TOTAL_CONNT, payload: result.data.total_count });
      }
    } catch (error) {
      dispatch({ type: CONSTS.GET_DATA_ERROR, payload: error.response.data.message });
    }
  };
};
