import React from 'react';
import {BrowserRouter,Route, Redirect, Switch} from "react-router-dom";

function Child1() {
    return (
        <div className="routing">
            <h1>Routing Concept</h1><br/>
            <h3>This is child1 Page.</h3>
        </div>
    )
}

function Child2() {
    return(
        <div className="routing">
            <h1>Routing Concept</h1><br/>
            <h3>This is child2 Page.</h3>
        </div>
    )
}

function About() {
    return (
        <BrowserRouter>
         <Switch>
             <Route  path="/about/child1" exact component={Child1} />
            <Route  path="/about/child2" exact component={Child2} />
            <Redirect from="/about" to="/about/child1" exact/>
         </Switch>
           
        </BrowserRouter>
    )
}

export default About;