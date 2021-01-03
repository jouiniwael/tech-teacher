import React from 'react';
import login from './component/login.js';
import register from './component/register.js';
import newcourse from './component/newcourse.js';


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
            <Information/>
          </Route>
          <Route path="/getoldcourse" exact>
            <Login></Login>
          </Route>
          <Route path="/newcourse" exact>
            
          </Route>
          <Route path="/nextpage" exact>
            
          </Route>
          
      </Router>
    </div>
        )
    }
    
 }
 export default App