import React, { useEffect, useState } from 'react';
import {Button,Container,Form} from 'react-bootstrap';
import './login.css'

function Login(props:any) {
  const {setPage} = props
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  const HandleSubmit = () =>{
    const getCred = JSON.parse(localStorage.getItem('Accounts') || '[]')
    const accountComp = getCred.find((item:any) => 
    item.username == user && item.password == pass)
    if(accountComp){ 
      const userLogged = {
        user:accountComp.username,
        id:accountComp.id
      } 
      const sessionData = JSON.stringify(userLogged)
      sessionStorage.setItem("LoggedIn", sessionData);      
      setPage(2)
    }
    else{
      alert("User Account does not Exist!")
    }
  }
  return (
    <div className='login'>
        <Form className="login-form">
            <Form.Group className='login-content'>
                Login
            </Form.Group>
            <Form.Group className='login-content'>
              <input type='text' placeholder='username' 
              value={user} onChange={(e) => setUser(e.target.value)}/>
            </Form.Group>
            <Form.Group className='login-content'>
              <input type='password' placeholder='password' 
              value={pass} onChange={(e) => setPass(e.target.value)}/>
            </Form.Group>
            <Form.Group className='login-content'>
                Doesn't have an Account? 
              <a href="#" onClick={() =>setPage(1)}> Create one</a>
            </Form.Group>
            <Form.Group className='login-content'>
              <Button size="sm" onClick={HandleSubmit}>
                Login
              </Button>              
            </Form.Group>
        </Form>
    </div>

  );
}

export default Login;
