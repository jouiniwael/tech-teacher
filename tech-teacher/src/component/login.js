import React from 'react';

class Login extends React.Component {
     
         constructor(props){
            super(props)
            this.state={
                username:"",
                password:"",
                
                
            }
            this.handelSubmit=this.handelSubmit.bind(this)
     }
     usernamehandler=(event)=>{
        this.setState({
            username:event.target.value
        })
     }
     passwordhandler=(event)=>{
        this.setState({
            password:event.target.value
        }) 
     }
     handelSubmit=(event)=>{
         this.setState({
          username:"",
          password:"",  
         })
         event.preventDefault(event);
     }

     render()
     {
         return (
         <form onSubmit={this.handelSubmit} method="POST"> 
        <h1>Login</h1>
        <label>username:</label><input type="text"  value={this.state.username} onChange={this.usernamehandler} placeholder="Firstname..." required /><br/>
        <label>password:</label><input type="text"  value={this.state.password} onChange={this.passwordhandler} placeholder="lastname..."  required /><br/>
        <input type="submit" value="submit"/>
          </form>
          )
        



}}
export default Login 
