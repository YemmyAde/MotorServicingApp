import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ContactUs from './pages/ContactUs'
import GetAQuote from './pages/GetAQuote'
import OurTeam from './pages/OurTeam'
import Products from './pages/Products'
import ServiceAll from './pages/ServiceAll'
import AboutUs from './pages/AboutUs'
import NotFound from './components/NotFound/NotFound'
import Forgotpage from './pages/Forgotpassword'
import Resetpage from './pages/Resetpassword'
import Emailpage from './pages/Emailsent'
import ServicesDetailspage from './pages/servicesDetailpage'



function Routes() {
    return(
        <Switch>
            <Route exact path ="/">
                <Home/>
            </Route>
           
            <Route path ="/login">
                <Login/>
            </Route>
            <Route path ="/sign-up">
                <Signup/>
            </Route>
            <Route path ="/forgot-password">
                <Forgotpage/>
            </Route>
            <Route path ="/reset-password">
                <Resetpage/>
            </Route>
            <Route path ="/email-sent">
                <Emailpage />
            </Route>
            <Route path ="/products">
                <Products/>
            </Route>
            <Route path ="/contact-us">
                <ContactUs/>
            </Route>
            <Route path ="/get-quote">
                <GetAQuote/>
            </Route>
            <Route path ="/our-team">
                <OurTeam/>
            </Route>
            <Route exact path='/services/:id' component={ServicesDetailspage} />
            <Route exact path='/services' component={ServiceAll} />
            <Route path ="/about-us">
                <AboutUs/>
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes;
