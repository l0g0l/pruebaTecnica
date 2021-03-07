import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// pages
import ReadOneArticle from '../pages/details/ReadOneArticle';
import Pagination from '../components/Pagination/products/Pagination'
import Form from '../components/Form/Form'

const Routes = () => {

    return (
        <main>
            <Router>
                <Switch>
                    
                   
                    <Route exact path='/' component={Pagination}></Route>
                    <Route exact path='/details/:id' component={ReadOneArticle}></Route> 



                </Switch>
            </Router>

        </main>

    )
}
export default Routes