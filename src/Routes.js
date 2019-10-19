import React, {Component} from 'react';
import Navbar from './component/moviescards/Navbar';
import Footer from './component/moviescards/Footer';
import Home from './component/pages/Home';
import Body from './component/pages/Body';
// import LinkList from './cardLink';
//import CardLink from './cardLink';
import ValidationLoginForm from './component/Login/ValidationLoginForm';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class RouteComponent extends Component {
    render() {
        return (
            <Router>
            <div className="App">
               
                <Switch>
                        {/* <Route path="/CardLink" exact component={CardLink} /> */}
                        {/* <Route path="/LinkList" component={LinkList} /> */}
                        <Route path="/Navbar" component={Navbar} />
                         <Route path="/Footer" component={Footer} />
                         <Route path="/Home" component={Home} />
                         <Route path="/Body" component={Body} />
                       
                        <Route path="/" component={ValidationLoginForm} />
                        
                        </Switch>
              
                </div>
                </Router>
            );
        }
}

export default RouteComponent;