import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {userAction} from '../store'
import axios from 'axios';
//import { Redirect } from 'react-router-dom';
import { useNavigate  } from "react-router-dom";

function SignUpPage()
{
    const dispatch = useDispatch();
    const [userType,setUserType] = useState();
    const userEmail= useSelector(state=>state.NewUser.userEmail)
    const userPassword = useSelector(state=>state.NewUser.userPassword);
    const nameUser = useSelector(state=>state.NewUser.userName);
    const navigate = useNavigate ();

    const user ={
        userName : nameUser,
        password: userPassword,
        email: userEmail,
    }
const signUp =()=>{
    console.log(userType);
    axios.post('https://localhost:44397/home/newUser?userType='+userType, user)
    .then(res=>{
        console.log(res.data);
        // <Redirect to="/AddRestaunt" />;
        navigate('/AddRestaunt');
    })
    .catch(err=>{
        console.log(err);
    })

}

return (
    <>

     <label>Enter User Email</label>
        <input type ='text' 
        onChange={(e) =>{
            dispatch(userAction.setUserEmail(e.target.value))

        }}
        />
        <br></br>
        <label>Enter Password</label>
        <input type ='password' 
        onChange={(e) =>{
            dispatch(userAction.setUserPassword(e.target.value))

        }}
        />        <br></br>
             <label>Enter Name</label>
        <input type ='text' 
        onChange={(e) =>{
            dispatch(userAction.setUserName(e.target.value))

        }}
        />        <br></br>
        <label>User Type</label>
        <select id="dropdown"  onChange={(e)=>{
                console.log(e.target.value);
                setUserType(e.target.value)


        }}>
        <option value="">Select an option</option>
        <option value="Customer">Customer</option>
        <option value="Restaunt">Restaunt</option>
      </select>
      <br></br>
        <button onClick={signUp}>SignUp</button>
    </>
)
}
export default SignUpPage;