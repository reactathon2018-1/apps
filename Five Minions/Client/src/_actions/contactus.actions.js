import { contactUsConstants } from '../_constants';
import axios from 'axios';

export const contactUsActions = {
    success,
    error
};

const responseFailure = {
    type: "Error",
    Message: "Please Contact HR at HR@excelon.com."
}

const emailSuccess = {
    type: "",
    Message: "Email Sent Succesfully."
}
function success(data) {
    return { type: contactUsConstants.CONTACT_US_SUCCESS, data };
}

function error(error) {
    return { type: contactUsConstants.CONTACT_US_FAILURE, error };
}

export function sendEmail(contactUs) {
    return (dispatch, getState) => {
        dispatch(contactUsActions.success(emailSuccess));
    }
}