import React from 'react';
import loginImg from '../login.svg';


export class Login extends React.component {
     constructor(props){
         super(props)
     }

     render(){

           return <div className='base-container'>
              <div className="header">login</div>

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
                        <label htmlFor='password'>password</label>
                        <input type='text' name='password' placeholder='password'/>
                    </div>
         <div className='footer'>
             <button type='button'classame='btn'> login</button>
         </div>


                       </div>




        
         </div>
              </div>





     }




}
