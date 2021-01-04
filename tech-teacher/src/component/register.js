
import React from "react";
import axios from 'axios';

 class Register  extends React.Component {
    constructor(props){
        super(props)
        this.state={
            firstname:"",
            lastname:"",
            password:"",
            email:"",
            username:""
        }
        this.handelSubmit=this.handelSubmit.bind(this)

    }
    firsthandler=(event)=>{
        this.setState({
           firstname:event.target.value 
        })

    }
    lasthandler=(event)=>{
        this.setState({
            lastname:event.target.value 
         })
 
    }
    passwordhandler=(event)=>{
        this.setState({
            password:event.target.value
        })}

    emailhandler=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    usernamehandler=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    handelSubmit=(event)=>{
       alert('${this.state.firstname} ${this.state.firstname} registred succesfully!!' )
       this.setState({
        firstname:"",
        lastname:"",
        password:"",
        email:"",
        username:"",

       })
       const user = {
        firstname:this.state.firstname,
        lastname:this.state. lastname,
        password:this.state.password,
        email:this.state.email,
        username:this.state.username,
      };
       axios.post('/register',{user}

       )
        event.preventDefault(event);
    }

     
    render(){
   return (
       <div>
           <form onSubmit={this.handelSubmit} > 
<h1>User registration</h1>
<label>firstname:</label><input type="text"  value={this.state.firstname} onChange={this.firsthandler} placeholder="Firstname..." /><br/>
<label>lastname:</label><input type="text"  value={this.state.lastname} onChange={this.lasthandler} placeholder="lastname..." /><br/>
<label>password:</label><input type="text"  value={this.state.password} onChange={this.passwordhandler} placeholder="password..." /><br/>
<label>email:</label><input type="text"  value={this.state.email} onChange={this.emailhandler} placeholder="email..." /><br/>
<label>username:</label><input type="text"  value={this.state.username} onChange={this.usernamehandler} placeholder="username..." /><br/>
<input type="submit" onClick={this.handelSubmit} value="submit"/>
           </form>


       </div>
   )

    }

}


 export default Register