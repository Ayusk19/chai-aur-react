import React, {useState, useContext} from 'react';
import UserContext from '../context/userContext';


function Login() {

    const [username, setUsername] = useState('')
    const [passwd, setPasswd] = useState('')

    const {setUser} = useContext(UserContext)

const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, passwd})
}

  return (
    <div>
      <h1>login</h1>
      <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />{""}
      <input type='text' value={passwd} onChange={(e) => setPasswd(e.target.value)} placeholder='password' />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
