import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';

import './style/common.less';

import {counter} from "./redux/test";
import Routes from './router';

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(<Provider store={store}>
    <Routes/>
</Provider>, document.getElementById('app'));


