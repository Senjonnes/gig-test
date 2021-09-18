import { IUserState } from "../../models/IUsersState";
import { Types } from "../actions/users.action";

const INITIAL_STATE = {
  loading: false,
  users: [],
};

export const usersReducer = (state = INITIAL_STATE, action: IUserState) => {
  switch (action.type) {
    case Types.FETCHING_USERS:
      return { ...state, loading: true };
    case Types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action,
      };
    case Types.FETCH_USERS_FAILURE:
      return { ...state, loading: false, message: 'Sorry, we are unable to retrieve users at the moment. Please try again later' };
    default:
      return state;
  }
};
