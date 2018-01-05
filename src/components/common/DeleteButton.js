import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import toastr from 'toastr';

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.deleteCourse = this.deleteCourse.bind(this);
    }
    deleteCourse(id) {
        this.props.actions.deleteCourse(id)
            .then(() => {
                toastr.success('Course Deleted');
            })
            .catch(error => {
                toastr.error(error);
            });
    }
    render() {
        return (
            <button className="btn btn-primary" onClick={() => this.deleteCourse(this.props.id)}>Delete</button>
        );
    }
}
DeleteButton.propTypes = {
    //onClick: PropTypes.func
    id: PropTypes.string,
    actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
