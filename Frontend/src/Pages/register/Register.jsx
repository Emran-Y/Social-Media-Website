import './register.css'

function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginlogo">Connectify</h3>
                <span className="loginDesc">Connect with friends and the world around you on Connectify</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Username' type="text" className="loginInput" />
                    <input placeholder='Email' type="Email" className="loginInput" />
                    <input placeholder='Password' type="password" className="loginInput" />
                    <input placeholder='Confirm Password' type="password" className="loginInput" />
                    <button className='loginBtn'>sign Up</button>
                    <button className="loginRegisterButton">Log Into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register