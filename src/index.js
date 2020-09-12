import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {compose, createStore, applyMiddleware} from "redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    ));

const app = (
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById('root')
);

serviceWorker.unregister();
