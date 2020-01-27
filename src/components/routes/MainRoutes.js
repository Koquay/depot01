import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../home/Home';

export default function MainRoutes() {
    return (
        <Router>    
            <Route exact path='/' component={Home} />
        </Router>
    )
}
