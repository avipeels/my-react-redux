import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { isDirty } from 'redux-form';
function warnAboutSavedChanges(WrappedComponent, formName) {
    class WarnAboutSavedChanges extends React.Component {
        componentWillUnmount() {
          //  console.log('context:'+this.context);
        //   super(props);
          //  console.log('props:'+this.props);
            this.props.router.setRouteLeaveHook(this.props.route, () => {
                if (this.props.isFormDirty)
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
    function mapStateToProps(state,context) {
        return {
            isFormDirty: isDirty(formName)(state),
            route:context.route,
            router:context.router
        }
    }

    return withRouter(
        connect(mapStateToProps, null)(WarnAboutSavedChanges)
    );
}
export default warnAboutSavedChanges;