import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {userAction} from '../store'
import axios from 'axios';


function SignUpPage()
{
    const dispatch = useDispatch();
    const userEmail= useSelector(state=>state.NewUser.userEmail)
    const userPassword = useSelector(state=>state.NewUser.userPassword);
    const nameUser = useSelector(state=>state.NewUser.userName);
    const user ={
        userName : nameUser,
        password: userPassword,
        email: userEmail
    }
const signUp =()=>{
    axios.post('https://localhost:44397/home/newUser',user)
    .then(res=>{
        console.log(res.data);
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
        <button onClick={signUp}>SignUp</button>
    </>
)
}
export default SignUpPage;