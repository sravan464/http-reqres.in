/**
 * Created by sravankumarganji on 9/18/17.
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import Courses from './components/courses/CoursesPage'

const Routing = () => (
  <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/about' component={AboutPage}/>
    <Route path='/courses' component={Courses}/>
  </Switch>
)

export default Routing
