import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Step2 from './pages/step2';
import Step3 from './pages/step3';
import Step4 from './pages/step4';
import Step5 from './pages/step5';
import Step6 from './pages/step6';
import Step7 from './pages/step7';
import Step8 from './pages/step8';
import Step9 from './pages/step9';
import Step10 from './pages/step10';
import Step11 from './pages/step11';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/step2" exact component={Step2} />
                <Route path="/step3" exact component={Step3} />
                <Route path="/step4" exact component={Step4} />
                <Route path="/step5" exact component={Step5} />
                <Route path="/step6" exact component={Step6} />
                <Route path="/step7" exact component={Step7} />
                <Route path="/step8" exact component={Step8} />
                <Route path="/step9" exact component={Step9} />
                <Route path="/step10" exact component={Step10} />
                <Route path="/step11" exact component={Step11} />
            </Switch>
        </BrowserRouter>
    );
}