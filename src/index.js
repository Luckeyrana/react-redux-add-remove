import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createBrowserHistory from "history/createBrowserHistory";
import {Router} from "react-router-dom";
import {Provider} from "react-redux"
import {createStore} from 'redux';
import rootReducer from "./redux/Reducer/rootReducer";

const store = createStore(rootReducer,
    //adding debug for development environment ==> can be remove for production
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
const history = createBrowserHistory();


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>

        </Router>
    </Provider>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
