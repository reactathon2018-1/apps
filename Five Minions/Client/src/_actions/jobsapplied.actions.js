import { jobsAppliedConstants } from '../_constants';
import axios from 'axios';

export const jobsAppliedActions = {
    docUploadSuccess,
    docUploadError,
    jobsAppliedFetchSuccess,
    jobsAppliedFetchError
};

const responseFailure = {
    type: "Error",
    Message: "Please Contact HR at HR@excelon.com."
}

function docUploadSuccess(data) {
    return { type: jobsAppliedConstants.JOBS_APPLIED_DOC_UPLOAD_SUCCESS, data };
}

function docUploadError(error) {
    return { type: jobsAppliedConstants.JOBS_APPLIED_DOC_UPLOAD_FAILURE, error };
}

function jobsAppliedFetchSuccess(data) {
    return { type: jobsAppliedConstants.JOBS_APPLIED_FETCH_SUCCESS, data };
}

function jobsAppliedFetchError(error) {
    return { type: jobsAppliedConstants.JOBS_APPLIED_FETCH_FAILURE, error };
}

export function upLoadDocument(uploadObj) {
    return (dispatch, getState) => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(function (response) {
                dispatch(jobsAppliedActions.docUploadSuccess(response));
            })
            .catch(function (error) {
                dispatch(jobsAppliedActions.docUploadError(responseFailure));
            });
    }
}

export function fetchJobsApplied(userObj) {
    console.log("userObjuserObjuserObjuserObj", userObj.email)
    var email =userObj.email;
    return (dispatch, getState) => {

        axios({
            url: 'http://localhost:3001/graphql',
            method: 'post',
            data: {
              query: `
              query getDetails{
                details(email:"`+ userObj.email+`") {
                  user_name
                  email
                  password
                  first_name
                  last_name
                  jobInfo {
                    jobId
                    designation
                    skill
                    location
                    hiringManager
                    hiringHr
                    progressDetails {
                      roundType
                      status
                      feedback
                      result
                      date
                      
                    }
                  }
                }
              }
                `
            }
          }).then((response) => {
            dispatch(jobsAppliedActions.jobsAppliedFetchSuccess(response.data));
          }).catch(function (error) {
            dispatch(jobsAppliedActions.jobsAppliedFetchError(responseFailure));
        });
                  
    }
}