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
                <CourseList courses={courses} />
            </div>
        );
    }
}
function mapStateToProps(state) {//state from redux 
    return {
        courses: state.courses//returns courses which wil be assigned to our container component as props
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
    courses: PropTypes.array.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);