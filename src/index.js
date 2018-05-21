import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavbarHeader } from './components/layout/header/NavbarHeader'
import { Recipes } from './components/recipes/Recipes';
import { Bitcoin } from './components/bitcoin/Bitcoin';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AntForm } from './components/form/AntForm';
import { RandomBox } from './components/randombox/RandomBox';
import { Card } from './components/cards/Card'
import { Form } from 'antd';

const WrappedRegistrationForm = Form.create()(AntForm);

ReactDOM.render(
    <BrowserRouter>
        <div>
            <NavbarHeader />
            <Switch>
                <Route exact path="/" component={Recipes} />
                <Route exact path="/day7-1/card" component={Card} />
                <Route exact path="/day7-2,3/recipe" component={Recipes} />
                <Route exact path="/day8-1,2/bitcoin" component={Bitcoin} />
                <Route exact path="/day8-1,2/bitcoin/:currency" component={Bitcoin} />
                <Route exact path="/day8-3/antform" component={WrappedRegistrationForm} />
                <Route exact path="/card" component={() => (<h3> AAA </h3>)} />
                <Route exact path="/c" component={() => (<h3> CCC </h3>)} />
                <Route path="*" component={() => (<h3> Page not found </h3>)} />
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();