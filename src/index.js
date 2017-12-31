import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import configureStore from "./store/configureStore";
import { Provider } from 'react-redux';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
const store = configureStore();
store.dispatch(loadCourses());//display course data on app load
store.dispatch(loadAuthors());//display author data on app load
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);