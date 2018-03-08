import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,

} from 'react-router-dom';

import Login from './components/Login/index';
import Index from './components/Home/Index/index';
import Auth from './components/Auth/index';
import Register from './components/Register/index';

export default () => (
    <BrowserRouter>
        <div>
            <Auth></Auth>
            <Switch>
                <Route path="/" exact component={Index}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route component={Index} />
            </Switch>
        </div>
    </BrowserRouter>
)
