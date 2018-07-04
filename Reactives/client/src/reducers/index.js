import { combineReducers } from 'redux';


import { registration } from './registration.reducer';
import { authentication } from './authentication.reducer';
import { hackathonsdetail } from './hackathons.reducer';


const rootReducer = combineReducers({
  registration,
  authentication,
  hackathonsdetail
});

export default rootReducer;