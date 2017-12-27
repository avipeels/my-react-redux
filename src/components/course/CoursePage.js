import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
class CoursePage extends React.Component {
    constructor() {
        super();
    }
    courseRow(course, index) {
        return <div key={index} >{course.title}</div>;
    }
    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Course Page</h1>
                {/* {this.props.courses.map(this.courseRow)} */}
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