import 
{
    getUsers
  } from "../_api";

export const Types = {
  FETCHING_USERS: "FETCHING_USERS",
  FETCH_USERS_SUCCESS: "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILURE: "FETCH_USERS_FAILURE",
};

export const fecthUsers = () => async (dispatch: any) => {
  dispatch({ type: Types.FETCHING_USERS });
  try {
    const response = await getUsers();
    dispatch({
      type: Types.FETCH_USERS_SUCCESS,
      users: response,
    });
  } catch (error) {
    dispatch({ type: Types.FETCH_USERS_FAILURE });
  }
};
