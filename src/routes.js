import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Step2 from './pages/step2';




export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/step2" exact component={Step2} />
            </Switch>
        </BrowserRouter>
    );
}