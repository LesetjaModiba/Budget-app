import '../css/login.css'
import { useHistory, Link } from 'react-router-dom';

function Login()
{  

    let history=useHistory();
    
    const loginClick=(()=>
    {
        if(document.querySelector(".email").value==="")
        {
            document.querySelector(".emailError").style.display='block';
        }
        if(document.querySelector(".password").value==="")
        {
            document.querySelector(".passError").style.display='block';
        }
        else
        {
            history.push("/home");
        }
         
    });
    const emailKey=(()=>
    {
       document.querySelector(".emailError").style.display='none';
    });
    const passKey=(()=>
    {
        document.querySelector(".passError").style.display='none';
    });
    return(
        <div className="login-container">
            <h1>Log in</h1>
            <input onKeyPress={emailKey} className="email" type="email" placeholder="Enter your email"/>
            <span className="emailError">Enter your email or username!</span>
            <input onKeyPress={passKey} className="password" type="password" placeholder="Type your password"/>
            <span  className="passError">password can't be empty!</span>
            <Link className='link1' to="/signup">Don't have an account? Click here to sign up</Link>
            <button className='login-btn' onClick={loginClick}>Login</button>

        </div>
    )

}
export default Login;