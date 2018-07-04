import {SUBMIT_FORM,ENTRY_SUCCESS} from '../actions/actions'

const initState = {
    mounted:false
};

const r_entry_reducer = (state = initState,action) =>{
	var newState;
    switch(action.type){
		case ENTRY_SUCCESS:
			newState = Object.assign({},state,{isLoginSuccess: true});
			return newState;
        default:
            return state;
    }
};

export default r_entry_reducer;