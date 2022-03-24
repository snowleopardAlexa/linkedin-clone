import './Login.css'

const Login = () => {

const loginToApp = () => {}

const register = () => {}

  return (
    <div className="login">
      <img 
        src="/linkedin.png" 
        alt="linkedin-logo" 
      />

      <form>
        <input placeholder="Full name (required if registering)" type="text" />
        <input placeholder="Profile pic URL (optional)" type="text" />
        <input placeholder="Email" type="text" />
        <input placeholder="Password" type="password" />
        <butto type="submit">Sign In</butto>
      </form>

      <p>Not a member?
          <span 
            className="login__register" 
            onClick={register}
          >Register Now</span>
      </p>
    </div>
  )
}

export default Login
