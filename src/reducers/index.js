import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInprogress from './ajaxStatusReducer';
const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInprogress
});
export default rootReducer;