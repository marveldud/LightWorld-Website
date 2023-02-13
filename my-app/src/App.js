import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import AboutUs from './AboutUs'
import Catalog from './Catalog'
import ContactUs from './ContactUs'
import Gallery from './Gallery'
import Home from './Home'
// import "./Catalog.css"
// import "./index.css"



const App = () => {
  return (
    <>
      <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/catalog" component={Catalog} />
         <Route exact path="/gallery" component={Gallery} />
         <Route exact path="/aboutus" component={AboutUs} />
         <Route exact path="/contactus" component={ContactUs} />
          <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App

