import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { isDirty } from 'redux-form';
function warnAboutSavedChanges(WrappedComponent, formName) {
    class WarnAboutSavedChanges extends React.Component {
        componentDidMount() {
            this.props.router.setRouteLeaveHook(this.props.route, () => {
                if (this.state.unsaved)
                    return 'You have unsaved information, are you sure you want to leave this page?'
            });
        }
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    WarnAboutSavedChanges.propTypes = {
        isFormDirty: PropTypes.bool,
        router: PropTypes.object,
        route: PropTypes.object
    };
    function mapStateToProps(state) {
        return {
            isFormDirty: isDirty(formName)(state),
            route:state.route,
            router:state.router
        }
    };

    return withRouter(
        connect(mapStateToProps, null)(WarnAboutSavedChanges)
    );
}
export default warnAboutSavedChanges;