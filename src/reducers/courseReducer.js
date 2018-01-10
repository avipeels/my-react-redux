import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case types.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)];
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        case types.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)];
        case types.DELETE_COURSE_SUCCESS:
            //https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
            {//since the state can't be mutated, it is copied into new variable and returned
                let newState = state.slice();
                newState.splice(action.courseId, 1);
                return newState;//returned new state
            }
        default:
            return state;
    }
}