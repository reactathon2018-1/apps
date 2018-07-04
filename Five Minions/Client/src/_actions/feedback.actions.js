import { feedBackConstants } from '../_constants';
import axios from 'axios';

export const feedBackActions = {
    success,
    error
};

const responseFailure = {
    type: "Error",
    Message: "Please Contact HR at HR@excelon.com."
}
function success(data) {
    return { type: feedBackConstants.FEEDBACK_SUCCESS, data };
}

function error(error) {
    return { type: feedBackConstants.FEEDBACK_FAILURE, error };
}

export function submitFeedBack(feedBackObj) {
    let user = JSON.parse(localStorage.getItem('user'));
    return (dispatch, getState) => {
        

          axios({
            url: 'http://localhost:3001/graphql',
            method: 'post',
            data: {
              query: `
              mutation{
                createFeedbacks(email : "`+ user.email +`",question1 : `+feedBackObj.rating1+`,,question2 : `+feedBackObj.rating2+`,question3 : `+feedBackObj.rating3+`,question4 : `+feedBackObj.rating4+`,comment : "`+feedBackObj.comment+`"){
                  email
                }
              }
                `
            }
          }) .then(function (response) {
            dispatch(feedBackActions.success(response));
        })
        .catch(function (error) {
            dispatch(feedBackActions.success(responseFailure));
        });  
                   
    }
}