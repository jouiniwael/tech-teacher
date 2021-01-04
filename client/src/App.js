import React from 'react';
import Login from './component/login.js';
import Register from './component/register.js';
import Course from './component/newcourse.js';
import Router from 'react-router-dom';

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