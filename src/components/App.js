//this component handles the App templates used on every page
import React, { PropTypes } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';
//here connect is required to get the loading status from the redux store and pass it down to the header component status
class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header loading={this.props.loading} />
                {this.props.children}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        loading: state.ajaxCallsInprogress > 0
    }
}
App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(App);