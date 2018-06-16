// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';
import { Footer } from '../shared/Footer/Footer';
import { HomePage } from '../pages/HomePage';
import { TechnologyPage } from '../pages/Technology';
import { SecurityPage } from '../pages/Security';
import { InsightPage } from '../pages/Insight';
import { ContactUsPage } from '../pages/ContactUs';
import { LoginPage } from '../pages/Login';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/technology' component={TechnologyPage} />
                <Route path='/security' component={SecurityPage} />
                <Route path='/insight' component={InsightPage} />
                <Route path='/contact' component={ContactUsPage} />
                <Route path='/login' component={LoginPage} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </Fragment>
    </BrowserRouter>
);