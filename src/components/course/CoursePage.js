import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import { browserHistory } from 'react-router/lib';
import DeleteButton from '../common/DeleteButton';
class CoursePage extends React.Component {
    constructor() {
        super();
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }
    deleteCurrentCourse() {

    }
    render() {
        const { courses } = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input
                    type="text"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}
                />
                {courses.length ? <CourseList courses={courses} /> :
                    !this.props.loading ? <span>Please add course</span> :
                        <span></span>}
            </div>
        );
    }
}
function mapStateToProps(state) {//state from redux 
    return {
        courses: state.courses,
        loading: state.ajaxCallsInProgress > 0
    };
}
function mapDispatchToProps(dispatch) {
    return {
        // createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    };
}
CoursePage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);