import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Signup from './components/signup';
import Home from './components/Home';
import Signin from './components/signin';
import history from './History';

// export const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup-stylist" component={Signup} />
                    <Route exact path="/signup" component={Signin} />
                    
                </div>
            </Router>
        )
    }
}

export default Routers;