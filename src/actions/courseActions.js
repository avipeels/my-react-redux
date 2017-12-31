/**
 * this file will hold all course related actions
 */
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    };
}
export function createCourseSuccess(course) {
    return {
        type: types.CREATE_COURSE_SUCCESS,
        course
    };
}
export function updateCourseSuccess(course) {
    return {
        type: types.UPDATE_COURSE_SUCCESS,
        course
    };
}
export function loadCourses() {//thunk
    //thunk alwasy returns a function that accepts dispatch
    return dispatch => {
        //body of the thunk
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses()
            .then(courses => {//this will return a promies     
                dispatch(loadCoursesSuccess(courses));
            })
            .catch(error => {
                throw (error);
            });
    };
}
export function saveCourse(course) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course)
            .then(savedCourse => {
                course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
            })
            .catch(error => {
                dispatch(ajaxCallError());
                throw error;
            });
    };
}