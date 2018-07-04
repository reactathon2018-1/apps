import {SUBMIT_FORM,ENTRY_SUCCESS} from '../actions/actions'

const initState = {
    isLoginSuccess:false
};

const r_gridList_reducer = (state = initState,action) =>{
	var newState;
    switch(action.type){
		case ENTRY_SUCCESS:
			newState = Object.assign({},state,{isLoginSuccess: true,job_obj:action.job_obj});
			return newState;
        default:
            return state;
    }
};

export default r_gridList_reducer;