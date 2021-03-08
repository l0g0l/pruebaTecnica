import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// pages
import ReadOneArticle from '../pages/details/ReadOneArticle';

import Home from '../pages/home/Home'

const Routes = () => {

    return (
        <main>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/details/:id' component={ReadOneArticle}></Route> 
                </Switch>
            </Router>

        </main>

    )
}
export default Routes