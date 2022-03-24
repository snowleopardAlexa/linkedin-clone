import './Login.css'

const Login = () => {
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
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default Login
