import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingPage';
import AboutMe from './aboutme';
import Resume from './resume';
import Projects from './projects';
import Contacts from './contact';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contacts}/>
    </Switch>
)

export default Main;