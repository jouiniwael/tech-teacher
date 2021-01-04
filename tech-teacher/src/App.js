
import './App.css';
import React from 'react';
import Login from './component/login.js';
import Register from './component/register.js';
import Course from './component/newcourse.js';
// import {Router,Route} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

 class App extends React.Component{
    constructor (props){
        super(props)

    }
    render(){
        return(
            <div className="App">
      <Router>
          <Route path="/" exact>
           
          </Route>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/register" exact>
            <Register/>
          </Route>
          <Route path="/getoldcourse" exact>
            <Login></Login>
          </Route>
          <Route path="/newcourse" exact>
            <Course></Course>
          </Route>
          <Route path="/nextpage" exact>
            
          </Route>
          
      </Router>
    </div>
        )
    }
    
 }
 export default App