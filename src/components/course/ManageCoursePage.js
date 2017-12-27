import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
        this.updateCourseState = this.updateCourseState.bind(this);
    }
    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        alert(course[field]);
        this.setState({ course: course });
        alert(course);
        //return this.setState((prevState)=>({ course: prevState.course }));
    }
    render() {
        return (
            <div>
                <CourseForm
                    allAuthors={this.props.authors}
                    onChange={this.updateCourseState}
                    course={this.props.course}
                    errors={this.state.errors} />
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions.createCourse)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
ManageCoursePage.propTypes = {
    //
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};