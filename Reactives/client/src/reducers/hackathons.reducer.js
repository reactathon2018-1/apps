import { hackathonsConstants } from '../constants';

export function hackathonsdetail(state = {}, action) {
  switch (action.type) {
    case hackathonsConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case hackathonsConstants.GETALL_SUCCESS:
      return {
        items: action.hackathons
      };
    case hackathonsConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}