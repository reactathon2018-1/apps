import { hackathonsConstants } from '../constants';
import { hackathonsService } from '../services';

export const hackathonsActions = {
    getAllHackathons
};

function getAllHackathons() {
    return dispatch => {
        dispatch(request());

        hackathonsService.getAll()
            .then(
                hackathons => dispatch(success(hackathons)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: hackathonsConstants.GETALL_REQUEST } }
    function success(hackathons) { return { type: hackathonsConstants.GETALL_SUCCESS, hackathons } }
    function failure(error) { return { type: hackathonsConstants.GETALL_FAILURE, error } }
}