import { feedBackConstants } from '../_constants';


const initialState = {};

export function feedbackReducer(state = initialState, action) {
    switch (action.type) {
        case feedBackConstants.FEEDBACK_SUCCESS:
            return {
                feedBackData: action.data
            };
        case feedBackConstants.FEEDBACK_FAILURE:
            return { feedBackData: action.error };
        default:
            return state
    }
}