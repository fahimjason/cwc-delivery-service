import React, { Suspense, lazy } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './pages/NotFound/Notfound';

const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));

const AppRouter = () => {
    return (
        <Router>
            <Suspense fallback={<div className="text-center pt-5"><Spinner animation="grow" /></div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="*" component={Notfound} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default AppRouter;