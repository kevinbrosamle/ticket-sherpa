import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, applyRouterMiddleware} from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home/Home.jsx';
import HostHome from './components/Host/HostHome.jsx';
import HostEventsContainer from './containers/HostEventsContainer.js';
import HostCreateEventContainer from './containers/HostCreateEventContainer.js';
import EventsListContainer from './containers/EventsListContainer.js';
import EventDetailsContainer from './containers/EventDetailsContainer.js';
import HostEventDetailsContainer from './containers/HostEventDetailsContainer.js';
import LoginContainer from './containers/LoginContainer.js';
import SignUpContainer from './containers/SignUpContainer.js';
import HostVerifyContainer from './containers/HostVerifyContainer.js';
import HostTicketsContainer from './containers/HostTicketsContainer.js';
import HostTicketDetailsContainer from './containers/HostTicketDetailsContainer.js';
import HostCreateConfirmation from './components/Host/HostCreateConfirmation.jsx';
import { useScroll } from 'react-router-scroll';

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.requireAuth = this.requireAuth.bind(this);
  }

  requireAuth(nextState, replace) {
    if (!this.props.auth) {
      replace({
        pathname: '/login',
      })
    }
  }

  render() {
    return (
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/events" component={EventsListContainer}/>
        <Route path="/events/:eventName" component={EventDetailsContainer}/>

        <Route path="/account" component={HostHome} onEnter={this.requireAuth}/>
        <Route path="/hostevents" component={HostEventsContainer} onEnter={this.requireAuth}/>
        <Route path="/hostcreateevent" component={HostCreateEventContainer} onEnter={this.requireAuth}/>
        <Route path="/tickets" component={HostTicketsContainer} onEnter={this.requireAuth}/>
        <Route path="/tickets/:eventName" component={HostTicketDetailsContainer} onEnter={this.requireAuth}/>
        <Route path="/verify" component={HostVerifyContainer} />
        <Route path="/hostEvents/:eventName" component={HostEventDetailsContainer} onEnter={this.requireAuth}/>

        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/hostcreateconfirmation" component={HostCreateConfirmation} />
      </Route>
    </Router>
  )
  }
}
