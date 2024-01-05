import { useRef } from 'react'
import './login.css'

function Login() {

    const email = useRef()
    const password = useRef()

    const handleClick = (e) => {
        e.preventDefault()
        console.log(email.current.value)
    }
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginlogo">Connectify</h3>
                <span className="loginDesc">Connect with friends and the world around you on Connectify</span>
            </div>
            <form className="loginRight" onSubmit={handleClick}>
                <div className="loginBox">
                    <input 
                    placeholder='Email' 
                    type="Email" 
                    required
                    ref={email}
                    maxLength={50}
                    className="loginInput" 
                    />
                    <input 
                    placeholder='Password' 
                    required
                    ref={password}
                    minLength={8}
                    type="password" 
                    className="loginInput" 
                    />
                    <button className='loginBtn'>Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login