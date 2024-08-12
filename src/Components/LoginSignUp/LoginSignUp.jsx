import React, {useState} from 'react'
import './LoginSignUp.css'

const LoginSignUp = () => {

    const [action, setAction] = useState("Sign Up")

  return (
    <div className='container'>

        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">Name: 
                <input type="text" placeholder='Enter your name' />
            </div>}
            
            <div className="input">Age: 
                <input type="number" placeholder='Enter your Age' />
            </div>
            <div className="input">E-mail: 
                <input type="email"  placeholder='Enter your email'/>
            </div>
            <div className="input">Password: 
                <input type="password" placeholder='Enter your password' />
            </div>
            <div className="input">Address: 
                <input type="text" placeholder='Enter your Address'/>
            </div>
            <div className="input">Comment: 
                <input type="text" placeholder='Comment' />
            </div>
        </div>

        {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password ?<span>Click Here!</span></div>}

        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>

    </div>
  )
}

export default LoginSignUp