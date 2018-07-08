import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/app';
import About from './components/about';

export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component = { App } />
                <Route path = '/about' component = { About } />
            </Switch>
        </BrowserRouter>
    );
}