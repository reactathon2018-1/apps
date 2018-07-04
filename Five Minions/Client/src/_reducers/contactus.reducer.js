import { contactUsConstants } from '../_constants';


const initialState = {};

export function contactUsReducer(state = initialState, action) {
    switch (action.type) {
        case contactUsConstants.CONTACT_US_SUCCESS:
            return {
                contactUs: action.data
            };
        case contactUsConstants.CONTACT_US_FAILURE:
            return { contactUsError: action.error };
        default:
            return state
    }
}