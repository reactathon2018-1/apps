import {SUBMIT_FORM} from '../actions/actions'

const initState = {
    mounted:false
};

const r_entry_reducer = (state = initState,action) =>{
    switch(action.type){
        case SUBMIT_FORM:
            var newState = Object.assign({},state,{isLoginSuccess: true});
            return newState;
        default:
            return state;
    }
};

export default r_entry_reducer;