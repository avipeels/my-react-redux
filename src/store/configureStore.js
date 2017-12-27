import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// import { createCourse } from '../actions/courseActions';
import thunk from  'redux-thunk';
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk,reduxImmutableStateInvariant()),//other middleware feattures are logging,scheduling actions,sending crash reports
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}