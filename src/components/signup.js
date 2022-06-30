import '../css/singup.css';
import { useHistory, Link} from 'react-router-dom';

function SignUp()
{
    let history=useHistory();
    const signUpClick=(()=>
    {
        if(document.querySelector("#name").value==="")
        {
            document.querySelector(".nameError").style.display='block';
        }
        if(document.querySelector("#email").value==="")
        {
            document.querySelector(".emailError").style.display='block';
        }
        if(document.querySelector("#password").value==="")
        {
            document.querySelector(".passError").style.display='block';
        }
        if(document.querySelector("#cPassword").value==="")
        {
            document.querySelector(".cPassError").style.display='block';
        }
        else
     history.push("/home")
    });

    const nameKey=(()=>
    {
       document.querySelector(".nameError").style.display='none';
    });
    const emailKey=(()=>
    {
       document.querySelector(".emailError").style.display='none';
    });
    const passKey=(()=>
    {
        document.querySelector(".passError").style.display='none';
    });
    const cPassKey=(()=>
    {
        document.querySelector(".cPassError").style.display='none';
    });
    return(
        <div className='sign-container'>
        <h1>Sign Up</h1>
        <input onKeyPress={nameKey} className='input1' id='name' type="text" placeholder="Name and Surname"/>
        <span className='nameError' >Enter your name and surname !</span>
        <input onKeyPress={emailKey} className='input1' id='email' type="email" placeholder="email example@gmail.com"/>
        <span className='emailError'>Enter your email !</span>
        <input onKeyPress={passKey} className='input1' id='password' type="password" placeholder="Password"/>
        <span className='passError'>Enter your password !</span>
        <input onKeyPress={cPassKey} className='input1' id='cPassword' type="password" placeholder="Confirm password"/>
        <span className='cPassError'>Confirm your password !</span>
        <imput className="check" type="checkbox"/>
        <label for="check">Show password</label> 
        <Link className='link2' to="/login">Already have and account? Log in here</Link>
        <button onClick={signUpClick}>Sing up</button>
        </div>
    )

}
export default SignUp;