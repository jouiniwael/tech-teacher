
import React from "react";
import image from './login.svg';

export class Register  extends React.component {
    constructor(props){
        super(props)
    }

    render(){

          return <div className='base-container'>
             <div className="header">Register</div>

                  <div  className='content'>
                      <div className='image'>
                         <img src={loginImg}/>
                      </div>

                      <div className='form'>
                   <div className='form-group'>
                       <label htmlFor='username'>username</label>
                       <input type='text' name='username' placeholder='username'/>
                   </div>
                   <div className='form-group'>
                       <label htmlFor='email'>email</label>
                       <input type='email' name='email' placeholder='email'/>
                   </div>
                   <div className='form-group'>
                       <label htmlFor='password'>password</label>
                       <input type='text' name='password' placeholder='password'/>
                   </div>
        <div className='footer'>
            <button type='button'classame='btn'> Register</button>
        </div>
                      </div>
        </div>
             </div>

    }
}
