import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import { authorsFormattedForDropdown } from '../../selectors/selectors';
import warnAboutUnsavedChanges from '../hoc/WarnAboutUnsavedChanges';
import CourseForm from './CourseForm';
import { fail } from 'assert';
import toastr from 'toastr';
export class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.course.id !== nextProps.id) {
            this.setState({ course: Object.assign({}, nextProps.course) });
        }
    }
    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        this.setState({ course: course });
    }
    courseFormIsValid() {
        let formIsValid = true;
        let errors = {};
        if (this.state.course.title.length < 5) {
            errors.title = "Title must be at least 5 characters.";
            formIsValid = false;
        }
        if (this.state.course.category.length < 5) {
            errors.category = "Category must be at least 5 characters.";
            formIsValid = false;
        }
        if (this.state.course.length.length < 3) {
            error.length = "Please enter length in the mm:ss format";
            formIsValid=false;
        }
        this.setState({ errors: errors });
        return formIsValid;
    }
    saveCourse(event) {
        event.preventDefault();
        if (!this.courseFormIsValid()) {
            return;
        }
        this.setState({ saving: true });
        this.props.actions.saveCourse(this.state.course)
            .then(() => {
                this.redirect();
            })
            .catch(error => {//we need to update the store when an ajax call errors out
                toastr.error(error);
                this.setState({ saving: false });
            });
    }
    redirect() {
        this.setState({ saving: false });
        toastr.success('Course saved');
        this.context.router.push('/courses');
    }
    render() {
        return (
            <div>
                <CourseForm
                    allAuthors={this.props.authors}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                    course={this.state.course}
                    errors={this.state.errors}
                    saving={this.state.saving} />
            </div>
        );
    }
}
function getCourseById(courses, id) {
    const course = courses.filter(course => course.id === id);
    if (course.length) return course[0];
    return null;
}
function mapStateToProps(state, ownProps) {
    //get the course id through ownProps.params.id
    const courseId = ownProps.params.id;

    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    return {
        course: course,
        authors: authorsFormattedForDropdown(state.authors)
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
//Pull in the react router context which is a global variable to make it available on the this.context.router
ManageCoursePage.contextTypes = {
    router: PropTypes.object
};
export default warnAboutUnsavedChanges(connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage), 'CourseForm');
