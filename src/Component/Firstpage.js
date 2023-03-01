import SignUpPage from './SignUpPage';
import Login from './Login'
import React,{useState} from 'react'


function Firstpage()
{
    const [showLogin,setShowLogin]=useState(false);
    const [showSignUpPage,setShowSignUpPage]=useState(false);

return (
    <>
    <div hidden={showLogin || showSignUpPage}>
    <div>
        <button onClick={()=>{
           setShowSignUpPage(true);
        }}>SiGnUp</button>
    </div>
    <div>
        <button onClick={()=>{
        setShowLogin(true)
        }}>LoginPage</button>
    </div>
    </div>
    <div>
        {showLogin && <Login/>}
    </div>
    <div>
        {showSignUpPage && <SignUpPage/>}
    </div>
    </>
)
}
export default Firstpage;
