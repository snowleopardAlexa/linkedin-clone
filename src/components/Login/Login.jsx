import { useState } from 'react'
import './Login.css'
import { auth } from './firebase'

const Login = () => {

const [email, setEmail] = useState("")    
const [password, setPassword] = useState("")
const [name, setName] = useState("")
const [profilePic, setProfilePic] = useState("")

const loginToApp = (e) => {
    e.preventDefault();
}

const register = () => {
   
}

  return (
    <div className="login">
      <img 
        src="/linkedin.png" 
        alt="linkedin-logo" 
      />

      <form>
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          type="text" 
          placeholder="Full name (required if registering)"
        />

        <input 
          value={profilePic} 
          onChange={(e) => setProfilePic(e.target.value)} 
          type="text" 
          placeholder="Profile pic URL (optional)"
        />

        <input 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          type="email" 
        />

        <input 
           value={password} 
           onChange={(e) => setPassword(e.target.value)}
           placeholder="Password" 
           type="password" 
        />
        
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>

      <p>Not a member?{" "}
          <span 
            className="login__register" 
            onClick={register}
          >Register Now</span>
      </p>
    </div>
  )
}

export default Login
