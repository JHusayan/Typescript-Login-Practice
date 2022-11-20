import { useEffect, useState} from 'react';
import {Button,Form} from 'react-bootstrap';
import './create.css'

function Create(props:any) {
  const {setPage} = props
  let [user, setUser] = useState("")
  let [pass, setPass] = useState("")
  let [userlist, setList] = useState<Object[]>([])
  const getUniqueID = () => 
    Date.now() + ((Math.random()*100000).toFixed())
  useEffect(() => {
    const getUsers = JSON.parse(localStorage.getItem('Accounts') || '[]')
    setList(getUsers)
  },[])
  const HandleSubmit = (event:any) =>{
    if(user&&pass){
      const userObj = {
        username:user,
        password:pass,
        id:getUniqueID()
      }
      const newData = [ ...userlist, userObj]
      setList(newData)
      localStorage.setItem("Accounts",
        JSON.stringify(newData)) 
      const userLogged = {
        user:userObj.username,
        id:userObj.id
      } 
      const sessionData = JSON.stringify(userLogged)
      sessionStorage.setItem("LoggedIn",sessionData);  
      setPage(2)  
    }
    else{
      alert("Error, Please Fillout the required fields!")
    }
  }
  return (
    <div className='register' >
        <Form className='register-content'>
            <Form.Group className="register-content">
                Create Account
            </Form.Group>
            <Form.Group className="register-content">
                <input type='text' placeholder='username' value={user} 
                onChange={(e) => setUser(e.target.value)} name='username'/>
            </Form.Group>
            <Form.Group className="register-content">
                <input type='password' placeholder='password' value={pass} 
                onChange={(e) => setPass(e.target.value)} name='password'/>
            </Form.Group>
            <Form.Group className="register-content">
                  <Button onClick={HandleSubmit} size="sm">
                    Create
                  </Button>
            </Form.Group>
            <Form.Group className="register-content">
                  <Button onClick={() => setPage(0)} size="sm">
                    Go Back to Login
                  </Button>  
            </Form.Group>
        </Form>
    </div>
  );
}

export default Create;