//this component handles the App templates used on every page
import React, { PropTypes } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReactBlockUi from 'react-block-ui';
import '../../node_modules/react-block-ui/lib/style.css';
//here connect is required to get the loading status from the redux store and pass it down to the header component status
class App extends React.Component {
    render() {
        return (
            <ReactBlockUi tag="div" blocking={this.props.loading}>
                <div className="container-fluid">
                    <Header loading={this.props.loading} courseCount={this.props.courseCount} />
                    {this.props.children}
                    {/* {this.props.loading && <LoadingBlockUI />} */}
                </div>
            </ReactBlockUi>
        );
    }
}
function mapStateToProps(state) {
    return {
        loading: state.ajaxCallsInprogress > 0,
        courseCount: state.courses.length
    };
}
App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    courseCount: PropTypes.number

};

//export default withRouter(connect(mapStateToProps)(App));
export default connect(mapStateToProps)(App);